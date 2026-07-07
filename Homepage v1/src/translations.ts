export interface RoadmapStep {
  title: string;
  desc: string;
  detail: string;
  duration: string;
  who: string;
}

export interface LanguageContent {
  metaTitle: string;
  disclaimer: string;
  disclaimerShort: string;
  welcome: string;
  selectLanguage: string;
  continueBtn: string;
  understandBtn: string;
  searchPlaceholder: string;
  searchButton: string;
  searchResultsCount: string;
  noResults: string;
  privacyTitle: string;
  privacyIntro: string;
  privacyBody: string;
  privacyLinkText: string;
  termsLinkText: string;
  privacyModalTitle: string;
  privacyModalClose: string;
  termsModalTitle: string;
  termsModalClose: string;
  navTitle: string;
  navOpen: string;
  navClose: string;
  glossaryTitle: string;
  reportIssueTitle: string;
  reportIssueBtn: string;
  reportSuccess: string;
  feedbackPlaceholder: string;
  sourceLabel: string;
  
  // Sections
  sections: {
    intro: {
      title: string;
      source: string;
      subtitle: string;
      text1: string;
      text2: string;
      ldlTooltipTitle: string;
      ldlTooltip: string;
      mutationTooltipTitle: string;
      mutationTooltip: string;
    };
    roadmap: {
      title: string;
      subtitle: string;
      source: string;
      clickHint: string;
      steps: RoadmapStep[];
    };
    whyReferred: {
      title: string;
      source: string;
      text1: string;
      reasons: string[];
    };
    counselling: {
      title: string;
      source: string;
      subtitle: string;
      text1: string;
      bullets: string[];
    };
    testInvolved: {
      title: string;
      source: string;
      text1: string;
      details: string[];
    };
    results: {
      title: string;
      source: string;
      positiveTitle: string;
      positiveDesc: string;
      negativeTitle: string;
      negativeDesc: string;
      vusTitle: string;
      vusDesc: string;
    };
    insurance: {
      title: string;
      source: string;
      subtitle: string;
      text1: string;
      text2: string;
    };
    resources: {
      title: string;
      source: string;
      buddyTitle: string;
      buddyDesc: string;
      healthupTitle: string;
      healthupDesc: string;
      gacTitle: string;
      gacDesc: string;
    };
    video: {
      title: string;
      source: string;
      desc: string;
    };
  };
}

export const translations: Record<'en' | 'zh' | 'ms' | 'ta', LanguageContent> = {
  en: {
    metaTitle: "Singapore National FH Patient Education Portal",
    disclaimer: "Disclaimer: This educational website is a supplementary information resource. It does not provide medical diagnosis, treatment, or clinical recommendations. Always consult your General Practitioner (GP) or a certified genetic counsellor for professional medical decisions.",
    disclaimerShort: "Important: This is an educational resource, not a medical diagnosis tool.",
    welcome: "Welcome to the Singapore Familial Hypercholesterolaemia (FH) Educational Guide",
    selectLanguage: "Please select your preferred language to begin:",
    continueBtn: "Continue",
    understandBtn: "I Understand & Agree",
    searchPlaceholder: "Search for topics (e.g., 'insurance', 'counselling', 'LDL')...",
    searchButton: "Search",
    searchResultsCount: "Found {count} keyword match(es) for '{query}'",
    noResults: "No matches found. Try searching for other terms like 'statins', 'blood', or 'cascade'.",
    privacyTitle: "Patient Privacy & Information Agreement",
    privacyIntro: "We are committed to helping you make informed, confident choices about genetic testing in Singapore.",
    privacyBody: "This website is a purely informational, offline-first application. We do not store, upload, or share your personal health data, selection options, or search queries. All choices are processed locally on your device. Clicking 'I Understand' allows you to browse the guides in your chosen language.",
    privacyLinkText: "Read Privacy Policy",
    termsLinkText: "Read Terms of Use",
    privacyModalTitle: "Privacy Policy (Singapore Patient Education Portal)",
    privacyModalClose: "Close Privacy Policy",
    termsModalTitle: "Terms of Use (Singapore Patient Education Portal)",
    termsModalClose: "Close Terms of Use",
    navTitle: "FH Guide Sections",
    navOpen: "Open Navigation Menu",
    navClose: "Close Menu",
    glossaryTitle: "Key Medical Terms",
    reportIssueTitle: "Feedback / Report an Issue",
    reportIssueBtn: "Submit Feedback",
    reportSuccess: "Thank you! Your feedback has been simulated as successfully submitted to the Clinical Design Team.",
    feedbackPlaceholder: "Type your feedback or technical issue here...",
    sourceLabel: "Verified Source:",
    sections: {
      intro: {
        title: "1. What is Familial Hypercholesterolaemia (FH)?",
        source: "SingHealth Genomic Medicine Centre & myheart.org.sg",
        subtitle: "A common inherited condition that causes high cholesterol from birth.",
        text1: "Familial Hypercholesterolaemia (FH) is a genetic condition that causes very high levels of low-density lipoprotein (LDL) cholesterol—often referred to as 'bad cholesterol'—in the blood from the day you are born. Unlike general high cholesterol which is often caused by diet and lifestyle, FH is caused by an inherited genetic mutation (a spelling change in your DNA).",
        text2: "Because the body cannot clear bad cholesterol naturally with FH, it builds up in the arteries, which can lead to early heart disease if left untreated. Recognizing FH early allows individuals to take simple, highly effective preventative measures to protect their heart health. Lifestyle changes alone are rarely enough, but modern treatments can restore a full, healthy life.",
        ldlTooltipTitle: "LDL (Low-Density Lipoprotein)",
        ldlTooltip: "Often called 'bad cholesterol'. High levels can build up as plaque in your blood vessels, narrowing them and increasing heart disease risk.",
        mutationTooltipTitle: "Genetic Mutation",
        mutationTooltip: "A minor variation or 'spelling mistake' in our DNA code. For FH, this mutation typically occurs in the LDLR, APOB, or PCSK9 genes, affecting how the liver clears cholesterol."
      },
      roadmap: {
        title: "2. Your FH Testing & Care Journey",
        subtitle: "Understanding what happens from referral to long-term health management.",
        source: "Primary Care Pages & Genomic Assessment Centre (GAC) Leaflet",
        clickHint: "Click or tap any step to expand details about what to expect, who is involved, and estimated times.",
        steps: [
          {
            title: "GP Referral",
            desc: "Your General Practitioner flags elevated LDL levels or family cardiac history and recommends genetic evaluation.",
            detail: "Your GP will review your overall cardiovascular risks. If your LDL cholesterol is persistently high (usually above 4.9 mmol/L in adults) or you have a family history of early heart attacks, they refer you to the Genomic Assessment Centre (GAC).",
            duration: "Initial clinic visit",
            who: "Your family doctor / General Practitioner (GP)"
          },
          {
            title: "Pre-Test Counselling",
            desc: "A supportive, non-pressured discussion with a certified genetic counsellor to explore choices.",
            detail: "This is a key consultation to discuss what genetic testing is, the potential impact of results on you and your immediate relatives, and how Singapore's insurance moratorium protects your coverage. No test is performed today.",
            duration: "45 to 60 minutes",
            who: "Certified Genetic Counsellor / Clinical Geneticist"
          },
          {
            title: "Blood Sample / Genetic Test",
            desc: "A simple, standard blood draw at the clinic if you decide to proceed with testing.",
            detail: "If you decide to proceed, a clinical nurse will collect a small blood sample. This sample is sent to a specialized laboratory where the LDLR, APOB, and PCSK9 genes are carefully sequenced to find any FH-related genetic mutations.",
            duration: "10-15 minutes (blood draw)",
            who: "Clinical Nurse & Lab Specialists"
          },
          {
            title: "Results & Post-Test Counselling",
            desc: "Reviewing what your test results mean and planning your personalized wellness strategy.",
            detail: "You will meet your genetic counsellor again to receive your results. They will explain whether a mutation was found (Positive), not found (Negative), or if an unclear change was detected (Variant of Uncertain Significance). They will help coordinate your medical follow-ups.",
            duration: "30 to 45 minutes (approx. 4-8 weeks after blood test)",
            who: "Genetic Counsellor & Cardiologist"
          },
          {
            title: "Cascade Testing & Follow-up",
            desc: "Offering free or subsidized screening to family members to protect them proactively.",
            detail: "If your test is Positive, your biological parents, siblings, and children have a 50% chance of having the same gene change. By sharing this information, they can receive early testing ('cascade screening') and access life-saving preventative therapies before symptoms appear.",
            duration: "Ongoing lifetime wellness",
            who: "Your Family Members, GP, and Cardiologist"
          }
        ]
      },
      whyReferred: {
        title: "3. Why Have I Been Referred for Genetic Testing?",
        source: "MOH Newsroom & HPB Health Promotion Resources",
        text1: "Genetic testing is the gold standard for diagnosing FH with absolute certainty. Here are the primary reasons your General Practitioner has referred you for evaluation:",
        reasons: [
          "Very high LDL cholesterol levels (typically above 4.9 mmol/L) that remain elevated despite clean nutrition and healthy lifestyle habits.",
          "A personal history of early heart disease, chest pain, or stroke (occurring before age 55 for men, or age 60 for women).",
          "A strong family history of early-onset heart conditions, unexplained sudden cardiac death, or extremely high cholesterol in biological relatives.",
          "Physical signs of cholesterol deposits, such as pale-yellow bumps on the Achilles tendons or knuckles (xanthomas), or a white ring around the iris of the eye before age 45 (corneal arcus)."
        ]
      },
      counselling: {
        title: "4. What Happens at a Pre-Test Counselling Appointment?",
        source: "SingHealth Genomic Medicine Centre Guidelines",
        subtitle: "A dedicated supportive space to help you make your own choice.",
        text1: "Many patients feel anxious about visiting a genetic counselling clinic. It is important to know that this appointment is not an interrogation or a forced medical test. It is a dialogue designed entirely to empower you.",
        bullets: [
          "No needle or blood draws: No physical genetic test is conducted during the initial pre-test counselling consultation.",
          "Family tree mapping: The counsellor will map out your family health history to understand inheritance patterns.",
          "Answering questions: You can ask anything about costs, treatment options, accuracy, and emotional impacts.",
          "No pressure: The counsellor does not push you to take the test. You can take as much time as you need to decide."
        ]
      },
      testInvolved: {
        title: "5. What Does the Genetic Test Involve?",
        source: "Singapore National FH Genetic Testing Programme",
        text1: "If you decide to proceed with genetic testing after your pre-test counselling, the process is streamlined and highly structured:",
        details: [
          "Blood Draw: A simple blood sample is drawn from a vein in your arm, identical to a standard routine cholesterol health check.",
          "DNA Extraction: The laboratory isolates DNA from your white blood cells.",
          "Targeted Sequencing: High-precision sequencing instruments analyze specific genes responsible for familial high cholesterol, looking for known spelling variations.",
          "Quality Verification: Medical geneticists review any variants found against international clinical databases before compiling a final secure report."
        ]
      },
      results: {
        title: "6. What Do My Results Mean?",
        source: "SingHealth Genomic Medicine Centre Guidelines",
        positiveTitle: "Positive Result (Mutation Detected)",
        positiveDesc: "This means a clear genetic mutation associated with FH was found. This provides a definitive clinical diagnosis. While this might feel unsettling, it is actually powerful, actionable news. It allows your doctors to prescribe targeted medications (like statins or PCSK9 inhibitors) that are highly effective. It also opens up clinical pathways to test and protect your immediate family members.",
        negativeTitle: "Negative Result (No Mutation Detected)",
        negativeDesc: "This means no known FH-related genetic mutations were identified in the analyzed genes. If you have extremely high cholesterol, you may still need standard medical therapies, as clinical hypercholesterolemia can sometimes be polygenic (caused by many small genetic variations combined with lifestyle). However, a negative result means there is no clear single-gene cause to test in your children or relatives.",
        vusTitle: "Variant of Uncertain Significance (VUS)",
        vusDesc: "This means a variation was found in your DNA, but scientists do not yet have enough clinical evidence to say whether it causes FH or is just a harmless normal variant. You are not diagnosed with genetic FH based on a VUS. Your clinical team will manage your health based on your cholesterol levels and symptoms, and periodically review new medical data."
      },
      insurance: {
        title: "7. Genetic Testing, Insurance, & Singapore's Moratorium",
        source: "CNA & Ministry of Health Singapore (MOH Guidelines)",
        subtitle: "Your insurance coverage is protected under national agreements.",
        text1: "A common concern is whether taking a genetic test will prevent you or your family from getting health or life insurance in Singapore. The answer is highly reassuring.",
        text2: "Under the Ministry of Health's Moratorium on Genetic Testing and Insurance, registered insurers in Singapore cannot ask for, or use, predictive genetic test results to assess applications for key policies (including Life Insurance, Total Permanent Disability, and Critical Illness coverage) up to very high financial limits (typically covering the needs of most families). This ensures patients can undergo necessary clinical testing without worrying about losing future coverage. Importantly, insurers cannot refuse coverage or charge higher premiums based on a predictive FH genetic test."
      },
      resources: {
        title: "8. Support Resources in Singapore",
        source: "SingHealth HealthBuddy, HealthUp, & GAC",
        buddyTitle: "SingHealth Health Buddy Patient Portal",
        buddyDesc: "Easily track appointments, view lab reports, order medication refills, and read peer-reviewed cardiac wellness articles directly on your smartphone.",
        healthupTitle: "HealthUp Community Wellness Programme",
        healthupDesc: "A local community wellness initiative that connects you with personalized health coaches to support your diet, exercise, and cardiac care routine.",
        gacTitle: "Genomic Assessment Centre (GAC)",
        gacDesc: "Singapore's premier facility dedicated to clinical genetics. Located within major hospital clusters, offering compassionate, expert genetic counselling."
      },
      video: {
        title: "9. Educational Video: Understanding FH",
        source: "YouTube Medical Explainer (Supplementary Resource)",
        desc: "Watch this comprehensive, patient-friendly video detailing how FH works in the body and how modern medicine protects your heart health."
      }
    }
  },
  zh: {
    metaTitle: "新加坡国家家族性高胆固醇血症（FH）患者教育门户网站",
    disclaimer: "免责声明：本教育网站是一项补充信息资源。它不提供医疗诊断、治疗或临床建议。在做出专业医疗决定前，请务必咨询您的全科医生（GP）或合格的遗传咨询师。",
    disclaimerShort: "重要提示：这是一项教育资源，而非医学诊断工具。",
    welcome: "欢迎阅读新加坡家族性高胆固醇血症（FH）患者教育指南",
    selectLanguage: "请选择您偏好的语言以开始：",
    continueBtn: "继续",
    understandBtn: "我理解并同意",
    searchPlaceholder: "搜索主题（例如“保险”、“咨询”、“LDL”）...",
    searchButton: "搜索",
    searchResultsCount: "找到针对“{query}”的 {count} 处匹配项",
    noResults: "未找到匹配项。请尝试搜索其他词，如“药物”、“血液”或“家族”。",
    privacyTitle: "患者隐私与信息协议",
    privacyIntro: "我们致力于协助您在新加坡就基因检测做出明智、自信的选择。",
    privacyBody: "本网站是一个纯粹的信息性、离线优先的应用程序。我们不会存储、上传或分享您的个人健康数据、选择选项或搜索内容。所有选择均在您的设备本地处理。点击“我理解”即可使用您选择的语言浏览指南。",
    privacyLinkText: "阅读隐私政策",
    termsLinkText: "阅读使用条款",
    privacyModalTitle: "隐私政策（新加坡患者教育门户网站）",
    privacyModalClose: "关闭隐私政策",
    termsModalTitle: "使用条款（新加坡患者教育门户网站）",
    termsModalClose: "关闭使用条款",
    navTitle: "FH 指南章节",
    navOpen: "打开导航菜单",
    navClose: "关闭菜单",
    glossaryTitle: "关键医学术语",
    reportIssueTitle: "反馈 / 报告问题",
    reportIssueBtn: "提交反馈",
    reportSuccess: "谢谢您！您的反馈已成功模拟提交至临床设计团队。",
    feedbackPlaceholder: "在此输入您的反馈或遇到的技术问题...",
    sourceLabel: "经核实的来源：",
    sections: {
      intro: {
        title: "1. 什么是家族性高胆固醇血症（FH）？",
        source: "新加坡健康服务集团基因医学中心 & myheart.org.sg",
        subtitle: "一种自出生起就导致高胆固醇的常见遗传性疾病。",
        text1: "家族性高胆固醇血症（FH）是一种遗传性疾病，从您出生之日起，就会导致血液中低密度脂蛋白（LDL）胆固醇（通常被称为“坏胆固醇”）水平极高。普通高胆固醇往往是由饮食和生活方式引起的，但FH不同，它是由遗传基因突变（DNA代码中的拼写错误）引起的。",
        text2: "因为患有FH时身体无法自然清除坏胆固醇，它会在动脉中积聚，如果不进行治疗，可能会导致早期心脏病。及早发现FH可以让人们采取简单且极有效的预防措施来保护心脏健康。单靠生活方式的改变往往不够，但现代治疗手段可以使患者恢复饱满、健康的生活。",
        ldlTooltipTitle: "低密度脂蛋白（LDL）",
        ldlTooltip: "通常被称为“坏胆固醇”。高水平的LDL会在血管中形成斑块，导致血管变窄，增加患心脏病的风险。",
        mutationTooltipTitle: "基因突变",
        mutationTooltip: "我们DNA代码中的微小变异或“拼写错误”。对于FH，这种突变通常发生在LDLR、APOB或PCSK9基因中，从而影响肝脏清除胆固醇的方式。"
      },
      roadmap: {
        title: "2. 您的 FH 检测与护理流程",
        subtitle: "了解从转诊到长期健康管理的每一步骤。",
        source: "基层医疗护理页面 & 基因评估中心（GAC）宣传册",
        clickHint: "点击或轻触任何步骤以展开详细信息，了解详情、参与人员及预估时间。",
        steps: [
          {
            title: "全科医生转诊",
            desc: "您的全科医生发现您有高LDL水平或家族心脏病史，并建议进行遗传评估。",
            detail: "您的全科医生将评估您的整体心血管风险。如果您的LDL胆固醇持续偏高（成人通常高于 4.9 mmol/L）或有早期心脏病发作的家族史，他们会将您转介到基因评估中心（GAC）。",
            duration: "首次诊所就诊",
            who: "您的家庭医生 / 全科医生 (GP)"
          },
          {
            title: "检测前遗传咨询",
            desc: "与合格的遗传咨询师进行轻松、无压力的交谈，探讨检测选择。",
            detail: "这是一次关键的面对面咨询，旨在讨论什么是基因检测、检测结果对您和您的直系亲属的潜在影响，以及新加坡的保险暂停协议（Moratorium）如何保障您的保险权益。今天不进行任何检测。",
            duration: "45 至 60 分钟",
            who: "合格遗传咨询师 / 临床遗传学医生"
          },
          {
            title: "抽取血样 / 基因检测",
            desc: "如果您决定进行检测，将在诊所进行简单的常规抽血。",
            detail: "如果您决定继续，临床护士会采集少量血液样本。该样本会被送往专业实验室，对LDLR、APOB和PCSK9基因进行仔细测序，以寻找与FH相关的基因突变。",
            duration: "10-15 分钟（抽血）",
            who: "临床护士与实验室专家"
          },
          {
            title: "结果与检测后咨询",
            desc: "解读您的检测结果并规划您个性化的健康管理策略。",
            detail: "您将再次与遗传咨询师会面以获取检测结果。他们会向您解释是否发现了突变（阳性）、未发现（阴性）或检测到不明确的改变（临床意义未明的变异）。他们还会协助协调后续的医学随访。",
            duration: "30 至 45 分钟（抽血后约 4-8 周）",
            who: "遗传咨询师与心脏病专科医生"
          },
          {
            title: "家属级联筛查与随访",
            desc: "为家庭成员提供自愿或有补贴的筛查，防患于未然。",
            detail: "如果您的检测结果为阳性，您的亲生父母、兄弟姐妹和子女有50%的几率携带相同的基因改变。通过分享这一信息，他们可以接受早期检测（“级联筛查”），并在出现症状之前获得挽救生命的预防性治疗。",
            duration: "长期终身健康管理",
            who: "您的家庭成员、全科医生和心脏病专家"
          }
        ]
      },
      whyReferred: {
        title: "3. 为什么我会被转介进行基因检测？",
        source: "卫生部新闻室 & 健康促进局健康资源",
        text1: "基因检测是确诊FH的黄金标准。以下是您的全科医生建议您进行评估的主要原因：",
        reasons: [
          "极高的低密度脂蛋白（LDL）胆固醇水平（通常高于 4.9 mmol/L），即使在健康饮食和良好生活习惯下依然居高不下。",
          "个人有早期心脏病、胸痛或中风的病史（男性在55岁之前，女性在60岁之前发病）。",
          "直系亲属中有早发性心脏病、不明原因猝死或极高胆固醇的强烈家族史。",
          "胆固醇沉积的体征，例如跟腱或指关节处出现淡黄色肿块（黄色瘤），或者45岁之前眼角膜出现白环（角膜老年环）。"
        ]
      },
      counselling: {
        title: "4. 检测前遗传咨询有哪些内容？",
        source: "新加坡健康服务集团基因医学中心指南",
        subtitle: "专属的支持性空间，帮助您做出自主选择。",
        text1: "许多患者在去遗传咨询诊所时会感到焦虑。需要强调的是，这次预约绝非强制性的医学检测或审查，而是一个完全为了赋能予您而设计的双向沟通。",
        bullets: [
          "无针头或抽血：在首次检测前咨询中，不会进行任何物理性的基因检测。",
          "绘制家系图：咨询师会详细了解并绘制您的家族健康史，以分析遗传模式。",
          "解答疑惑：您可以询问任何关于费用、治疗方案选择、检测准确性以及心理影响的问题。",
          "绝无压力：咨询师绝不会强迫您接受检测。您可以带上充足的时间深思熟虑再做决定。"
        ]
      },
      testInvolved: {
        title: "5. 基因检测的具体过程是怎样的？",
        source: "新加坡国家 FH 基因检测计划",
        text1: "如果您在接受检测前咨询后决定进行基因检测，流程非常规范且高效：",
        details: [
          "抽取血液：临床人员会从您手臂的静脉中抽取一小管血液，这与普通血脂检查完全相同。",
          "提取 DNA：实验室会从您的白细胞中分离并纯化出DNA。",
          "靶向基因测序：使用高精度测序仪对负责清除胆固醇的特定基因进行比对，寻找已知的字母变异。",
          "质量核实：医学遗传学家在出具最终报告前，会对照全球临床数据库对发现的变异进行严格的核实。"
        ]
      },
      results: {
        title: "6. 检测结果意味着什么？",
        source: "新加坡健康服务集团基因医学中心指南",
        positiveTitle: "阳性结果（检测到致病突变）",
        positiveDesc: "这意味着在检测的基因中发现了与FH相关的明确致病突变。这提供了确切的医学诊断。尽管这可能会让人有些担忧，但这其实是非常重要且能提供积极行动方向的信息。它能让您的医生精准地为您开具高效药物（如他汀类药物或PCSK9抑制剂）。此外，这也为保护您的直系亲属开启了进行早期筛查的通道。",
        negativeTitle: "阴性结果（未检测到已知突变）",
        negativeDesc: "这意味着在所检测的基因中没有发现已知的FH致病基因突变。如果您依然拥有极高的胆固醇，可能仍需要接受常规的降脂药物治疗。因为临床上的高胆固醇有时是多基因共同作用及生活方式引起的。不过，阴性结果意味着无法在您的子女或直系亲属中通过该基因检测来进行确诊。",
        vusTitle: "临床意义未明的基因变异 (VUS)",
        vusDesc: "这意味着在您的DNA中发现了一个变异，但目前的科学和临床研究还没有足够的数据来证明它是导致FH的原因，还是仅仅是一个无害的正常个体差异。您不会因此被诊断为遗传性FH。您的医疗团队将根据您的胆固醇水平和临床症状来管理您的健康，并定期跟进医学界的新发现。"
      },
      insurance: {
        title: "7. 基因检测、保险与新加坡的“暂停索要基因检测结果协议”",
        source: "联合早报、新加坡卫生部 (MOH 指南)",
        subtitle: "国家政策和行业协议保障您的保险权益不受影响。",
        text1: "许多患者担心进行基因检测会导致自己或家人以后在新加坡无法购买人寿或医疗保险。答案是非常令人放心的。",
        text2: "根据新加坡卫生部的《基因检测与保险暂行协议》（Moratorium on Genetic Testing and Insurance），新加坡的注册保险公司不能要求或使用预测性基因检测结果来评估普通保额的人寿保险、终身残疾保险以及重疾险的投保申请。这确保了患者能够放心地接受必要的医学检测，而无需担心失去未来的保障。更重要的是，保险公司不能因为您进行了预测性FH基因检测而拒保或调高保费。"
      },
      resources: {
        title: "8. 新加坡本地的患者支持资源",
        source: "SingHealth HealthBuddy、HealthUp 和基因评估中心",
        buddyTitle: "Health Buddy 手机应用程式",
        buddyDesc: "在智能手机上轻松管理您的预约、查看化验室血液报告、订购常备降脂药并阅读经医学实证的心脏健康科普文章。",
        healthupTitle: "HealthUp 社区健康促进计划",
        healthupDesc: "一项本地社区健康计划，为您配对专属的健康顾问，在饮食、运动及心血管日常自我照护方面提供全方位的支持。",
        gacTitle: "基因评估中心 (Genomic Assessment Centre)",
        gacDesc: "新加坡专门负责临床遗传学的卓越医疗中心，坐落于各大公立医疗集群内，提供充满关怀且极其专业的遗传咨询服务。"
      },
      video: {
        title: "9. 科普视频：了解家族性高胆固醇血症",
        source: "YouTube 医学科普（补充学习资源）",
        desc: "观看这段浅显易懂的视频，详细了解FH在人体内的作用机制，以及现代医学如何呵护您的心脏健康。"
      }
    }
  },
  ms: {
    metaTitle: "Portal Pendidikan Pesakit FH Kebangsaan Singapura",
    disclaimer: "Penafian: Laman web pendidikan ini adalah sumber maklumat tambahan sahaja. Ia tidak menyediakan diagnosis perubatan, rawatan atau cadangan klinikal. Sentiasa rujuk Doktor Am (GP) atau kaunselor genetik bertauliah untuk keputusan perubatan profesional.",
    disclaimerShort: "Penting: Ini adalah sumber pendidikan, bukan alat diagnosis perubatan.",
    welcome: "Selamat Datang ke Panduan Pendidikan Familial Hypercholesterolaemia (FH) Singapura",
    selectLanguage: "Sila pilih bahasa pilihan anda untuk memulakan:",
    continueBtn: "Teruskan",
    understandBtn: "Saya Faham & Setuju",
    searchPlaceholder: "Cari topik (cth., 'insurans', 'kaunseling', 'LDL')...",
    searchButton: "Cari",
    searchResultsCount: "Menemui {count} padanan kata kunci untuk '{query}'",
    noResults: "Tiada padanan ditemui. Cuba cari istilah lain seperti 'ubat', 'darah', atau 'keluarga'.",
    privacyTitle: "Perjanjian Privasi & Maklumat Pesakit",
    privacyIntro: "Kami komited untuk membantu anda membuat pilihan yang bijak dan yakin tentang ujian genetik di Singapura.",
    privacyBody: "Laman web ini adalah aplikasi luar talian yang bermaklumat sahaja. Kami tidak menyimpan, memuat naik, atau berkongsi data kesihatan peribadi, pilihan, atau carian anda. Semua pilihan diproses secara tempatan di peranti anda. Klik 'Saya Faham' membolehkan anda melayari panduan dalam bahasa pilihan.",
    privacyLinkText: "Baca Dasar Privasi",
    termsLinkText: "Baca Syarat Penggunaan",
    privacyModalTitle: "Dasar Privasi (Portal Pendidikan Pesakit Singapura)",
    privacyModalClose: "Tutup Dasar Privasi",
    termsModalTitle: "Syarat Penggunaan (Portal Pendidikan Pesakit Singapura)",
    termsModalClose: "Tutup Syarat Penggunaan",
    navTitle: "Bahagian Panduan FH",
    navOpen: "Buka Menu Navigasi",
    navClose: "Tutup Menu",
    glossaryTitle: "Istilah Perubatan Utama",
    reportIssueTitle: "Maklum Balas / Laporkan Isu",
    reportIssueBtn: "Hantar Maklum Balas",
    reportSuccess: "Terima kasih! Maklum balas anda telah disimulasikan sebagai berjaya dihantar kepada Pasukan Reka Bentuk Klinikal.",
    feedbackPlaceholder: "Tulis maklum balas atau isu teknikal anda di sini...",
    sourceLabel: "Sumber Disahkan:",
    sections: {
      intro: {
        title: "1. Apakah itu Familial Hypercholesterolaemia (FH)?",
        source: "Pusat Perubatan Genomik SingHealth & myheart.org.sg",
        subtitle: "Keadaan warisan biasa yang menyebabkan kolesterol tinggi sejak lahir.",
        text1: "Familial Hypercholesterolaemia (FH) adalah keadaan genetik yang menyebabkan tahap kolesterol lipoprotein ketumpatan rendah (LDL) - sering disebut sebagai 'kolesterol jahat' - tersangat tinggi dalam darah sejak hari anda dilahirkan. Tidak seperti kolesterol tinggi biasa yang sering disebabkan oleh diet dan gaya hidup, FH disebabkan oleh mutasi genetik yang diwarisi (perubahan ejaan dalam DNA anda).",
        text2: "Oleh kerana badan tidak dapat membersihkan kolesterol jahat secara semula jadi dengan FH, ia terkumpul di dalam arteri, yang boleh menyebabkan penyakit jantung awal jika tidak dirawat. Mengesan FH awal membolehkan individu mengambil langkah pencegahan yang mudah dan sangat berkesan untuk melindungi kesihatan jantung mereka.",
        ldlTooltipTitle: "LDL (Lipoprotein Ketumpatan Rendah)",
        ldlTooltip: "Sering dipanggil 'kolesterol jahat'. Tahap tinggi boleh membina plak di dalam saluran darah anda, menyempitkannya dan meningkatkan risiko penyakit jantung.",
        mutationTooltipTitle: "Mutasi Genetik",
        mutationTooltip: "Variasi kecil atau 'kesilapan ejaan' dalam kod DNA kita. Untuk FH, mutasi ini biasanya berlaku pada gen LDLR, APOB, atau PCSK9, menjejaskan cara hati membersihkan kolesterol."
      },
      roadmap: {
        title: "2. Perjalanan Ujian & Penjagaan FH Anda",
        subtitle: "Memahami apa yang berlaku dari rujukan doktor hingga pengurusan kesihatan jangka panjang.",
        source: "Halaman Penjagaan Utama & Risalah Pusat Penilaian Genomik (GAC)",
        clickHint: "Klik atau ketik mana-mana langkah untuk melihat butiran tentang apa yang diharapkan, siapa yang terlibat, dan anggaran masa.",
        steps: [
          {
            title: "Rujukan GP (Doktor Am)",
            desc: "Doktor Am anda mengesan tahap LDL yang tinggi atau sejarah jantung keluarga dan mengesyorkan ujian genetik.",
            detail: "GP anda akan menyemak keseluruhan risiko kardiovaskular anda. Sekiranya kolesterol LDL anda secara berterusan tinggi (biasanya melebihi 4.9 mmol/L pada orang dewasa) atau mempunyai sejarah keluarga serangan jantung awal, mereka merujuk anda ke Pusat Penilaian Genomik (GAC).",
            duration: "Lawatan klinik awal",
            who: "Doktor keluarga anda / Doktor Am (GP)"
          },
          {
            title: "Kaunseling Pra-Ujian",
            desc: "Perbincangan mesra dan tanpa tekanan dengan kaunselor genetik bertauliah untuk meneroka pilihan.",
            detail: "Ini adalah sesi rundingan penting untuk membincangkan apa itu ujian genetik, potensi kesan keputusan terhadap anda dan saudara terdekat anda, dan bagaimana moratorium insurans Singapura melindungi perlindungan anda. Tiada ujian fizikal dilakukan hari ini.",
            duration: "45 hingga 60 minit",
            who: "Kaunselor Genetik Bertauliah / Pakar Genetik Klinikal"
          },
          {
            title: "Sampel Darah / Ujian Genetik",
            desc: "Pengambilan darah ringkas di klinik jika anda memutuskan untuk meneruskan ujian.",
            detail: "Sekiranya anda bersetuju, jururawat klinikal akan mengambil sampel darah kecil. Sampel ini dihantar ke makmal khusus di mana gen LDLR, APOB, dan PCSK9 dianalisis dengan teliti untuk mencari sebarang mutasi genetik berkaitan FH.",
            duration: "10-15 minit (ambil darah)",
            who: "Jururawat Klinikal & Pakar Makmal"
          },
          {
            title: "Keputusan & Kaunseling Pasca-Ujian",
            desc: "Meneliti maksud keputusan anda dan merancang strategi kesihatan peribadi.",
            detail: "Anda akan berjumpa dengan kaunselor genetik semula untuk menerima keputusan. Mereka akan menerangkan sama ada mutasi ditemui (Positif), tidak ditemui (Negatif), atau jika perubahan tidak jelas dikesan (Varian yang Kepentingannya Tidak Pasti).",
            duration: "30 hingga 45 minit (anggaran 4-8 minggu selepas ujian darah)",
            who: "Kaunselor Genetik & Pakar Kardiologi"
          },
          {
            title: "Ujian Cascade & Susulan",
            desc: "Menawarkan saringan percuma atau bersubsidi kepada ahli keluarga terdekat untuk perlindungan awal.",
            detail: "Sekiranya ujian anda Positif, ibu bapa kandung, adik-beradik, dan anak-anak anda mempunyai peluang 50% untuk mempunyai perubahan gen yang sama. Melalui perkongsian ini, mereka boleh menerima ujian awal ('ujian cascade') dan mengakses terapi pencegahan yang menyelamatkan nyawa.",
            duration: "Kesejahteraan sepanjang hayat",
            who: "Ahli Keluarga, GP, dan Pakar Kardiologi"
          }
        ]
      },
      whyReferred: {
        title: "3. Mengapa Saya Dirujuk untuk Ujian Genetik?",
        source: "Bilik Berita MOH & Sumber Promosi Kesihatan HPB",
        text1: "Ujian genetik adalah standard emas untuk mendiagnosis FH dengan kepastian mutlak. Berikut adalah sebab utama Doktor Am anda merujuk anda untuk penilaian:",
        reasons: [
          "Tahap kolesterol LDL yang sangat tinggi (biasanya melebihi 4.9 mmol/L) yang kekal tinggi walaupun mengamalkan pemakanan bersih dan gaya hidup sihat.",
          "Sejarah peribadi penyakit jantung awal, sakit dada, atau strok (berlaku sebelum umur 55 tahun bagi lelaki, atau umur 60 tahun bagi wanita).",
          "Sejarah keluarga yang kuat tentang keadaan jantung awal, kematian mengejut tanpa sebab, atau kolesterol tinggi dalam kalangan ahli keluarga.",
          "Tanda-tanda fizikal mendapan kolesterol, seperti ketulan kuning pucat pada tendon Achilles atau buku jari (xanthoma), atau cincin putih di sekeliling iris mata sebelum umur 45 tahun (corneal arcus)."
        ]
      },
      counselling: {
        title: "4. Apa yang Berlaku semasa Sesi Kaunseling Pra-Ujian?",
        source: "Garis Panduan Pusat Perubatan Genomik SingHealth",
        subtitle: "Ruang sokongan khas untuk membantu anda membuat pilihan sendiri.",
        text1: "Ramai pesakit berasa bimbang untuk melawat klinik kaunseling genetik. Penting untuk diketahui bahawa temu janji ini bukanlah paksaan atau ujian perubatan yang dipaksa. Ia adalah dialog yang direka sepenuhnya untuk memperkasakan anda.",
        bullets: [
          "Tiada jarum atau pengambilan darah: Tiada ujian genetik fizikal dijalankan semasa sesi kaunseling pra-ujian awal.",
          "Pemetaan salasilah keluarga: Kaunselor akan memetakan sejarah kesihatan keluarga anda untuk memahami corak pewarisan.",
          "Menjawab soalan: Anda boleh bertanya apa sahaja tentang kos, pilihan rawatan, ketepatan, dan kesan emosi.",
          "Tiada tekanan: Kaunselor tidak akan memaksa anda mengambil ujian. Anda boleh mengambil seberapa banyak masa yang anda perlukan untuk membuat keputusan."
        ]
      },
      testInvolved: {
        title: "5. Apakah yang Terlibat dalam Ujian Genetik?",
        source: "Program Ujian Genetik FH Kebangsaan Singapura",
        text1: "Sekiranya anda memutuskan untuk meneruskan ujian genetik selepas kaunseling pra-ujian anda, prosesnya adalah mudah dan sangat teratur:",
        details: [
          "Ambil Darah: Sampel darah mudah diambil dari urat di lengan anda, sama seperti pemeriksaan kesihatan kolesterol rutin biasa.",
          "Pengekstrakan DNA: Makmal mengasingkan DNA daripada sel darah putih anda.",
          "Penjujukan Sasaran: Instrumen penjujukan ketepatan tinggi menganalisis gen khusus yang bertanggungjawab untuk kolesterol tinggi keluarga, mencari variasi ejaan yang diketahui.",
          "Pengesahan Kualiti: Pakar genetik perubatan menyemak sebarang varian yang ditemui berbanding pangkalan data klinikal antarabangsa sebelum menyusun laporan akhir."
        ]
      },
      results: {
        title: "6. Apakah Maksud Keputusan Saya?",
        source: "Garis Panduan Pusat Perubatan Genomik SingHealth",
        positiveTitle: "Keputusan Positif (Mutasi Ditemui)",
        positiveDesc: "Ini bermakna mutasi genetik jelas yang berkaitan dengan FH telah ditemui. Ini memberikan diagnosis klinikal muktamad. Walaupun ini mungkin membimbangkan, ia sebenarnya adalah maklumat yang sangat penting dan berguna. Ia membolehkan doktor anda menetapkan ubat-ubatan sasaran (seperti statin) yang sangat berkesan, serta membolehkan saringan ahli keluarga terdekat anda dijalankan.",
        negativeTitle: "Keputusan Negatif (Tiada Mutasi Ditemui)",
        negativeDesc: "Ini bermakna tiada mutasi genetik berkaitan FH yang diketahui ditemui dalam gen yang dianalisis. Sekiranya anda mempunyai kolesterol yang sangat tinggi, anda mungkin masih memerlukan terapi perubatan standard, kerana kolesterol tinggi klinikal kadangkala boleh disebabkan oleh gabungan beberapa gen dan gaya hidup. Walau bagaimanapun, keputusan negatif bermakna tiada gen tunggal yang jelas untuk diuji dalam kalangan anak-anak anda.",
        vusTitle: "Varian yang Kepentingannya Tidak Pasti (VUS)",
        vusDesc: "Ini bermakna variasi ditemui dalam DNA anda, tetapi ahli sains belum mempunyai bukti klinikal yang mencukupi untuk menyatakan sama ada ia menyebabkan FH atau sekadar variasi normal yang tidak berbahaya. Pasukan klinikal akan menguruskan kesihatan anda berdasarkan tahap kolesterol dan gejala anda, serta menyemak data perubatan baharu secara berkala."
      },
      insurance: {
        title: "7. Ujian Genetik, Insurans, & Moratorium Singapura",
        source: "CNA & Kementerian Kesihatan Singapura (Garis Panduan MOH)",
        subtitle: "Perlindungan insurans anda dilindungi di bawah perjanjian kebangsaan.",
        text1: "Kebimbangan biasa ialah sama ada mengambil ujian genetik akan menghalang anda atau keluarga anda daripada mendapat insurans kesihatan atau hayat di Singapura. Jawapannya sangat melegakan.",
        text2: "Di bawah Moratorium Kementerian Kesihatan mengenai Ujian Genetik dan Insurans, syarikat insurans berdaftar di Singapura tidak boleh meminta atau menggunakan keputusan ujian genetik ramalan untuk menilai permohonan polisi utama (termasuk Insurans Hayat, Hilang Upaya Kekal, dan Penyakit Kritikal) sehingga had kewangan yang tinggi (biasanya melindungi keperluan kebanyakan keluarga). Ini memastikan pesakit boleh menjalani ujian klinikal yang diperlukan tanpa bimbang tentang kehilangan perlindungan masa hadapan."
      },
      resources: {
        title: "8. Sumber Sokongan di Singapura",
        source: "SingHealth HealthBuddy, HealthUp, & GAC",
        buddyTitle: "Portal Pesakit SingHealth Health Buddy",
        buddyDesc: "Jejaki temu janji dengan mudah, lihat laporan makmal, pesan ubat, dan baca artikel kesihatan jantung terus pada telefon pintar anda.",
        healthupTitle: "Program Kesejahteraan Komuniti HealthUp",
        healthupDesc: "Inisiatif kesejahteraan komuniti tempatan yang menghubungkan anda dengan jurulatih kesihatan peribadi untuk menyokong diet, senaman, dan rutin penjagaan jantung anda.",
        gacTitle: "Pusat Penilaian Genomik (GAC)",
        gacDesc: "Kemudahan terkemuka Singapura yang berdedikasi untuk genetik klinikal, menawarkan kaunseling genetik yang penuh prihatin dan pakar."
      },
      video: {
        title: "9. Video Pendidikan: Memahami FH",
        source: "YouTube Medical Explainer (Sumber Tambahan)",
        desc: "Tonton video mesra pesakit ini yang memperincikan cara kerja FH dalam badan dan bagaimana perubatan moden melindungi kesihatan jantung anda."
      }
    }
  },
  ta: {
    metaTitle: "சிங்கப்பூர் தேசிய எஃப்ஹெச் நோயாளி கல்வி போர்ட்டல்",
    disclaimer: "மறுப்பு: இந்த கல்வி வலைத்தளம் ஒரு கூடுதல் தகவல் ஆதாரமாகும். இது மருத்துவ நோய் கண்டறிதல், சிகிச்சை அல்லது மருத்துவ பரிந்துரைகளை வழங்காது. தொழில்முறை மருத்துவ முடிவுகளுக்கு எப்போதும் உங்கள் பொது மருத்துவர் (GP) அல்லது சான்றளிக்கப்பட்ட மரபணு ஆலோசகரைக் கலந்தாலோசிக்கவும்.",
    disclaimerShort: "முக்கியம்: இது ஒரு கல்வி ஆதாரம், மருத்துவ நோயறிதல் கருவி அல்ல.",
    welcome: "சிங்கப்பூர் குடும்ப பரம்பரை ஹைபர்கொலஸ்ட்ராலேமியா (FH) கல்வி வழிகாட்டிக்கு உங்களை வரவேற்கிறோம்",
    selectLanguage: "தொடங்குவதற்கு உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்:",
    continueBtn: "தொடரவும்",
    understandBtn: "நான் புரிந்து கொள்கிறேன் & ஒப்புக்கொள்கிறேன்",
    searchPlaceholder: "தலைப்புகளைத் தேடுங்கள் (எ.கா., 'காப்பீடு', 'ஆலோசனை', 'LDL')...",
    searchButton: "தேடு",
    searchResultsCount: "மின்னஞ்சல் '{query}' க்கான {count} முக்கிய வார்த்தை பொருத்தங்கள் கண்டறியப்பட்டன",
    noResults: "பொருத்தங்கள் எதுவும் இல்லை. 'மாத்திரைகள்', 'இரத்தம்' அல்லது 'குடும்பம்' போன்ற பிற சொற்களைத் தேட முயற்சிக்கவும்.",
    privacyTitle: "நோயாளி தனியுரிமை மற்றும் தகவல் ஒப்பந்தம்",
    privacyIntro: "சிங்கப்பூரில் மரபணு சோதனை பற்றிய தகவலறிந்த, நம்பிக்கையான தேர்வுகளை எடுக்க உங்களுக்கு உதவ நாங்கள் கடமைப்பட்டுள்ளோம்.",
    privacyBody: "இந்த வலைத்தளம் முற்றிலும் தகவல்பூர்வமான, ஆஃப்லைன்-முதன்மை பயன்பாடாகும். உங்கள் தனிப்பட்ட சுகாதாரத் தரவு, தேர்வு விருப்பங்கள் அல்லது தேடல் வினவல்களை நாங்கள் சேமிக்கவோ, பதிவேற்றவோ அல்லது பகிரவோ மாட்டோம். அனைத்து தேர்வுகளும் உங்கள் சாதனத்தில் உள்ளூரிலேயே செயல்படுத்தப்படுகின்றன. 'நான் புரிந்து கொள்கிறேன்' என்பதைக் கிளிக் செய்வதன் மூலம் நீங்கள் தேர்ந்தெடுத்த மொழியில் வழிகாட்டிகளைப் உலாவலாம்.",
    privacyLinkText: "தனியுரிமைக் கொள்கையைப் படிக்கவும்",
    termsLinkText: "பயன்பாட்டு விதிமுறைகளைப் படிக்கவும்",
    privacyModalTitle: "தனியுரிமைக் கொள்கை (சிங்கப்பூர் நோயாளி கல்வி போர்ட்டல்)",
    privacyModalClose: "தனியுரிமைக் கொள்கையை மூடு",
    termsModalTitle: "பயன்பாட்டு விதிமுறைகள் (சிங்கப்பூர் நோயாளி கல்வி போர்ட்டல்)",
    termsModalClose: "பயன்பாட்டு விதிமுறைகளை மூடு",
    navTitle: "எஃப்ஹெச் வழிகாட்டி பிரிவுகள்",
    navOpen: "வழிசெலுத்தல் மெனுவைத் திறக்கவும்",
    navClose: "மெனுவை மூடு",
    glossaryTitle: "முக்கிய மருத்துவ சொற்கள்",
    reportIssueTitle: "கருத்து / சிக்கலைப் புகாரளிக்கவும்",
    reportIssueBtn: "கருத்தைச் சமர்ப்பிக்கவும்",
    reportSuccess: "நன்றி! உங்கள் கருத்து மருத்துவ வடிவமைப்பு குழுவிற்கு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டதாக உருவகப்படுத்தப்பட்டுள்ளது.",
    feedbackPlaceholder: "உங்கள் கருத்து அல்லது தொழில்நுட்ப சிக்கலை இங்கே தட்டச்சு செய்யவும்...",
    sourceLabel: "சரிபார்க்கப்பட்ட ஆதாரம்:",
    sections: {
      intro: {
        title: "1. குடும்ப பரம்பரை ஹைபர்கொலஸ்ட்ராலேமியா (FH) என்றால் என்ன?",
        source: "சிங்ஹெல்த் மரபணு மருத்துவ மையம் & myheart.org.sg",
        subtitle: "பிறப்பிலிருந்தே அதிக கொலஸ்ட்ராலை ஏற்படுத்தும் ஒரு பொதுவான பரம்பரை நிலை.",
        text1: "குடும்ப பரம்பரை ஹைபர்கொலஸ்ட்ராலேமியா (FH) என்பது ஒரு மரபணு நிலையாகும், இது நீங்கள் பிறந்த நாளிலிருந்து இரத்தத்தில் மிக அதிக அளவு குறைந்த அடர்த்தி கொண்ட லிப்போபுரோட்டீன் (LDL) கொலஸ்ட்ரால் - பெரும்பாலும் 'கெட்ட கொலஸ்ட்ரால்' என்று குறிப்பிடப்படுகிறது - இரத்தத்தில் அதிகரிக்கச் செய்கிறது. பொதுவாக உணவு மற்றும் வாழ்க்கை முறையால் ஏற்படும் பொதுவான உயர் கொலஸ்ட்ரால் போலல்லாமல், FH என்பது ஒரு பரம்பரை மரபணு மாற்றத்தால் (உங்கள் டிஎன்ஏ குறியீட்டில் உள்ள எழுத்துப்பிழை மாற்றம்) ஏற்படுகிறது.",
        text2: "FH உடன் உடலால் கெட்ட கொலஸ்ட்ராலை இயற்கையாக வெளியேற்ற முடியாது என்பதால், அது தமனிகளில் குவிந்து, சிகிச்சையளிக்கப்படாவிட்டால் ஆரம்பகால இதய நோய்க்கு வழிவகுக்கும். FH ஐ முன்கூட்டியே கண்டறிவது தனிநபர்கள் தங்கள் இதய ஆரோக்கியத்தைப் பாதுகாக்க எளிய, மிகவும் பயனுள்ள தடுப்பு நடவடிக்கைகளை எடுக்க அனுமதிக்கிறது. வாழ்க்கை முறை மாற்றங்கள் மட்டுமே பொதுவாக போதுமானதாக இருக்காது, ஆனால் நவீன சிகிச்சைகள் ஆரோக்கியமான வாழ்க்கையை மீட்டெடுக்க முடியும்.",
        ldlTooltipTitle: "குறைந்த அடர்த்தி கொண்ட லிப்போபுரோட்டீன் (LDL)",
        ldlTooltip: "பெரும்பாலும் 'கெட்ட கொலஸ்ட்ரால்' என்று அழைக்கப்படுகிறது. அதிக அளவுகள் உங்கள் இரத்த நாளங்களில் பிளேக் ஆக உருவாகி, அவற்றை சுருக்கி இதய நோய் அபாயத்தை அதிகரிக்கும்.",
        mutationTooltipTitle: "மரபணு மாற்றம்",
        mutationTooltip: "நமது டிஎன்ஏ குறியீட்டில் ஒரு சிறிய மாறுபாடு அல்லது 'எழுத்துப்பிழை தவறு'. FH க்கு, இந்த மாற்றம் பொதுவாக LDLR, APOB அல்லது PCSK9 மரபணுக்களில் நிகழ்கிறது, இது கல்லீரல் கொலஸ்ட்ராலை எவ்வாறு வெளியேற்றுகிறது என்பதை பாதிக்கிறது."
      },
      roadmap: {
        title: "2. உங்கள் FH சோதனை மற்றும் பராமரிப்பு பயணம்",
        subtitle: "பொது மருத்துவர் பரிந்துரை முதல் நீண்ட கால சுகாதார மேலாண்மை வரை என்ன நடக்கிறது என்பதைப் புரிந்துகொள்வது.",
        source: "முதன்மை பராமரிப்பு பக்கங்கள் & மரபணு மதிப்பீட்டு மையம் (GAC) துண்டுப்பிரசுரம்",
        clickHint: "எதிர்பார்ப்பது என்ன, யார் ஈடுபட்டுள்ளனர் மற்றும் மதிப்பிடப்பட்ட நேரங்கள் பற்றிய விவரங்களை விரிவாக்க ஏதேனும் படியைக் கிளிக் செய்யவும் அல்லது தட்டவும்.",
        steps: [
          {
            title: "பொது மருத்துவர் பரிந்துரை",
            desc: "உங்கள் பொது மருத்துவர் அதிகரித்த எல்டிஎல் அளவுகள் அல்லது குடும்ப இதய வரலாற்றைக் கண்டறிந்து மரபணு மதிப்பீட்டை பரிந்துரைக்கிறார்.",
            detail: "உங்கள் பொது மருத்துவர் உங்கள் ஒட்டுமொத்த இருதய அபாயங்களை மதிப்பாய்வு செய்வார். உங்கள் எல்டிஎல் கொலஸ்ட்ரால் தொடர்ந்து அதிகமாக இருந்தால் (பெரியவர்களுக்கு பொதுவாக 4.9 mmol/L க்கு மேல்) அல்லது உங்களுக்கு ஆரம்பகால மாரடைப்பு ஏற்பட்ட குடும்ப வரலாறு இருந்தால், அவர்கள் உங்களை மரபணு மதிப்பீட்டு மையத்திற்கு (GAC) பரிந்துரைக்கிறார்கள்.",
            duration: "ஆரம்ப கிளினிக் வருகை",
            who: "உங்கள் குடும்ப மருத்துவர் / பொது மருத்துவர் (GP)"
          },
          {
            title: "சோதனைக்கு முந்தைய ஆலோசனை",
            desc: "விருப்பங்களை ஆராய சான்றளிக்கப்பட்ட மரபணு ஆலோசகருடன் ஆதரவான, அழுத்தமில்லாத கலந்துரையாடல்.",
            detail: "மரபணு சோதனை என்றால் என்ன, உங்களுக்கும் உங்கள் நெருங்கிய உறவினர்களுக்கும் சோதனை முடிவுகளின் சாத்தியமான தாக்கம் மற்றும் சிங்கப்பூரின் காப்பீட்டு ஒத்திவைப்பு ஒப்பந்தம் உங்கள் காப்பீட்டை எவ்வாறு பாதுகாக்கிறது என்பதைப் பற்றி விவாதிக்க இது ஒரு முக்கிய ஆலோசனையாகும். இன்று எந்த சோதனையும் செய்யப்படுவதில்லை.",
            duration: "45 முதல் 60 நிமிடங்கள்",
            who: "சான்றளிக்கப்பட்ட மரபணு ஆலோசகர் / மருத்துவ மரபியல் நிபுணர்"
          },
          {
            title: "இரத்த மாதிரி / மரபணு சோதனை",
            desc: "நீங்கள் சோதனையைத் தொடர முடிவு செய்தால் கிளினிக்கில் ஒரு எளிய, நிலையான இரத்த மாதிரி எடுக்கப்படும்.",
            detail: "நீங்கள் தொடர முடிவு செய்தால், ஒரு மருத்துவ செவிலியர் ஒரு சிறிய இரத்த மாதிரியை சேகரிப்பார். இந்த மாதிரி ஒரு சிறப்பு ஆய்வகத்திற்கு அனுப்பப்பட்டு, எஃப்ஹெச் தொடர்பான மரபணு மாற்றங்களைக் கண்டறிய LDLR, APOB மற்றும் PCSK9 மரபணுக்கள் கவனமாக பகுப்பாய்வு செய்யப்படுகின்றன.",
            duration: "10-15 நிமிடங்கள் (இரத்தம் எடுத்தல்)",
            who: "மருத்துவ செவிலியர் & ஆய்வக நிபுணர்கள்"
          },
          {
            title: "முடிவுகள் & சோதனைக்கு பிந்தைய ஆலோசனை",
            desc: "உங்கள் சோதனை முடிவுகளின் அர்த்தத்தை மதிப்பாய்வு செய்தல் மற்றும் உங்கள் தனிப்பயனாக்கப்பட்ட ஆரோக்கிய உத்தியைத் திட்டமிடுதல்.",
            detail: "உங்கள் முடிவுகளைப் பெற நீங்கள் மீண்டும் உங்கள் மரபணு ஆலோசகரை சந்திப்பீர்கள். ஒரு மாற்றம் கண்டறியப்பட்டதா (நேர்மறை), கண்டறியப்படவில்லையா (எதிர்மறை) அல்லது தெளிவற்ற மாற்றம் கண்டறியப்பட்டதா (நிச்சயமற்ற முக்கியத்துவம் வாய்ந்த மாறுபாடு) என்பதை அவர்கள் விளக்குவார்கள். அவர்கள் உங்கள் மருத்துவ பின்தொடர்தல்களை ஒருங்கிணைக்க உதவுவார்கள்.",
            duration: "30 முதல் 45 நிமிடங்கள் (இரத்த பரிசோதனைக்குப் பிறகு சுமார் 4-8 வாரங்கள்)",
            who: "மரபணு ஆலோசகர் & இருதய மருத்துவர்"
          },
          {
            title: "குடும்ப உறுப்பினர் சோதனை & பின்தொடர்தல்",
            desc: "குடும்ப உறுப்பினர்களை முன்கூட்டியே பாதுகாக்க அவர்களுக்கு இலவச அல்லது மானிய விலையில் பரிசோதனையை வழங்குதல்.",
            detail: "உங்கள் சோதனை நேர்மறையாக இருந்தால், உங்கள் பெற்றோர், உடன்பிறந்தவர்கள் மற்றும் குழந்தைகளுக்கு அதே மரபணு மாற்றம் இருக்க 50% வாய்ப்பு உள்ளது. இந்த தகவலைப் பகிர்வதன் மூலம், அவர்கள் ஆரம்பகால சோதனையைப் பெறலாம் மற்றும் அறிகுறிகள் தோன்றுவதற்கு முன்பு தடுப்பு சிகிச்சைகளைப் பெறலாம்.",
            duration: "தொடர்ந்து வாழ்நாள் முழுவதும் ஆரோக்கியம்",
            who: "உங்கள் குடும்ப உறுப்பினர்கள், பொது மருத்துவர் மற்றும் இருதய மருத்துவர்"
          }
        ]
      },
      whyReferred: {
        title: "3. நான் ஏன் மரபணு சோதனைக்கு பரிந்துரைக்கப்பட்டுள்ளேன்?",
        source: "MOH செய்தி அறை & HPB சுகாதார மேம்பாட்டு வளங்கள்",
        text1: "எஃப்ஹெச் நோயை முழுமையான உறுதியுடன் கண்டறிவதற்கான தங்கத் தரம் மரபணு சோதனை ஆகும். உங்கள் பொது மருத்துவர் உங்களை மதிப்பீட்டிற்கு பரிந்துரைத்ததற்கான முக்கிய காரணங்கள் இங்கே:",
        reasons: [
          "சுத்தமான ஊட்டச்சத்து மற்றும் ஆரோக்கியமான வாழ்க்கை முறை பழக்கவழக்கங்கள் இருந்தபோதிலும் தொடர்ந்து அதிகமாக இருக்கும் மிக அதிக எல்டிஎல் கொலஸ்ட்ரால் அளவுகள் (பொதுவாக 4.9 mmol/L க்கு மேல்).",
          "ஆரம்பகால இதய நோய், மார்பு வலி அல்லது பக்கவாதம் ஏற்பட்ட தனிப்பட்ட வரலாறு (ஆண்களுக்கு 55 வயதிற்கு முன்பும், பெண்களுக்கு 60 வயதிற்கு முன்பும் ஏற்படும்).",
          "ஆரம்பகால இதய நோய்கள், விவரிக்கப்படாத திடீர் இதய இறப்பு அல்லது இரத்த உறவினர்களிடம் மிக அதிக கொலஸ்ட்ரால் இருந்த வலுவான குடும்ப வரலாறு.",
          "அகில்லெஸ் தசைநார்கள் அல்லது விரல் மூட்டுகளில் வெளிர்-மஞ்சள் நிற வீக்கங்கள் (சாந்தோமாக்கள்) போன்ற கொலஸ்ட்ரால் படிவுகளின் உடல் ரீதியான அறிகுறிகள், அல்லது 45 வயதிற்கு முன்பே கண் கருவிழியைச் சுற்றி வெள்ளை வளையம் (கார்னியல் ஆர்கஸ்)."
        ]
      },
      counselling: {
        title: "4. சோதனைக்கு முந்தைய ஆலோசனை சந்திப்பில் என்ன நடக்கும்?",
        source: "சிங்ஹெல்த் மரபணு மருத்துவ மைய வழிகாட்டுதல்கள்",
        subtitle: "உங்கள் சொந்த விருப்பத்தை எடுக்க உங்களுக்கு உதவும் ஒரு பிரத்யேக ஆதரவான இடம்.",
        text1: "பல நோயாளிகள் மரபணு ஆலோசனை கிளினிக்கிற்குச் செல்வதைப் பற்றி கவலையடைகிறார்கள். இந்த சந்திப்பு ஒரு விசாரணை அல்லது கட்டாய மருத்துவ சோதனை அல்ல என்பதை அறிவது முக்கியம். இது முற்றிலும் உங்களுக்கு அதிகாரம் அளிப்பதற்காக வடிவமைக்கப்பட்ட ஒரு உரையாடல்.",
        bullets: [
          "ஊசி அல்லது இரத்தம் எடுத்தல் இல்லை: ஆரம்ப சோதனைக்கு முந்தைய ஆலோசனை சந்திப்பின் போது உடல் மரபணு சோதனை எதுவும் நடத்தப்படுவதில்லை.",
          "குடும்ப மர வரைபடம்: பரம்பரை வடிவங்களைப் புரிந்து கொள்ள ஆலோசகர் உங்கள் குடும்ப சுகாதார வரலாற்றை வரைபடமாக்குவார்.",
          "கேள்விகளுக்கு பதிலளித்தல்: செலவுகள், சிகிச்சை விருப்பங்கள், துல்லியம் மற்றும் உணர்ச்சி ரீதியான தாக்கங்கள் பற்றி நீங்கள் எதையும் கேட்கலாம்.",
          "அழுத்தம் இல்லை: சோதனையை எடுக்க ஆலோசகர் உங்களை வற்புறுத்த மாட்டார். நீங்கள் முடிவு செய்ய எவ்வளவு நேரம் வேண்டுமானாலும் எடுத்துக் கொள்ளலாம்."
        ]
      },
      testInvolved: {
        title: "5. மரபணு சோதனையில் என்ன அடங்கும்?",
        source: "சிங்கப்பூர் தேசிய எஃப்ஹெச் மரபணு சோதனை திட்டம்",
        text1: "உங்கள் சோதனைக்கு முந்தைய ஆலோசனைக்குப் பிறகு மரபணு சோதனையைத் தொடர நீங்கள் முடிவு செய்தால், செயல்முறை நெறிப்படுத்தப்பட்டு மிகவும் கட்டமைக்கப்பட்டுள்ளது:",
        details: [
          "இரத்தம் எடுத்தல்: உங்கள் கையில் உள்ள நரம்பிலிருந்து ஒரு எளிய இரத்த மாதிரி எடுக்கப்படுகிறது, இது ஒரு சாதாரண வழக்கமான கொலஸ்ட்ரால் சுகாதார பரிசோதனைக்கு ஒத்ததாகும்.",
          "டிஎன்ஏ பிரித்தெடுத்தல்: ஆய்வகம் உங்கள் வெள்ளை இரத்த அணுக்களிலிருந்து டிஎன்ஏவை பிரிக்கிறது.",
          "இலக்கு வரிசைமுறை: உயர்-துல்லியமான வரிசைமுறை கருவிகள் குடும்ப உயர் கொலஸ்ட்ராலுக்கு காரணமான குறிப்பிட்ட மரபணுக்களை பகுப்பாய்வு செய்து, அறியப்பட்ட எழுத்துப்பிழை மாறுபாடுகளைத் தேடுகின்றன.",
          "தர சரிபார்ப்பு: இறுதி அறிக்கையைத் தயாரிப்பதற்கு முன், கண்டறியப்பட்ட ஏதேனும் மாறுபாடுகளை மருத்துவ மரபியல் வல்லுநர்கள் சர்வதேச மருத்துவ தரவுத்தளங்களுடன் ஒப்பிட்டு சரிபார்க்கிறார்கள்."
        ]
      },
      results: {
        title: "6. எனது முடிவுகளின் அர்த்தம் என்ன?",
        source: "சிங்ஹெல்த் மரபணு மருத்துவ மைய வழிகாட்டுதல்கள்",
        positiveTitle: "நேர்மறையான முடிவு (மரபணு மாற்றம் கண்டறியப்பட்டது)",
        positiveDesc: "எஃப்ஹெச் உடன் தொடர்புடைய தெளிவான மரபணு மாற்றம் கண்டறியப்பட்டுள்ளது என்று பொருள். இது ஒரு உறுதியான மருத்துவ நோயறிதலை வழங்குகிறது. இது கவலையளிப்பதாக இருந்தாலும், இது உண்மையில் மிகவும் பயனுள்ள, செயல்படக்கூடிய செய்தியாகும். இது உங்கள் மருத்துவர்கள் மிகவும் பயனுள்ள குறிப்பிட்ட மருந்துகளை (ஸ்டேடின்கள் போன்றவை) பரிந்துரைக்க அனுமதிக்கிறது. இது உங்கள் நெருங்கிய குடும்ப உறுப்பினர்களை சோதிக்கவும் பாதுகாக்கவும் மருத்துவ வழிகளைத் திறக்கிறது.",
        negativeTitle: "எதிர்மறையான முடிவு (மரபணு மாற்றம் கண்டறியப்படவில்லை)",
        negativeDesc: "பகுப்பாய்வு செய்யப்பட்ட மரபணுக்களில் அறியப்பட்ட எஃப்ஹெச் தொடர்பான மரபணு மாற்றங்கள் எதுவும் கண்டறியப்படவில்லை என்று பொருள். உங்களுக்கு மிக அதிக கொலஸ்ட்ரால் இருந்தால், நீங்கள் இன்னும் நிலையான மருத்துவ சிகிச்சைகளை மேற்கொள்ள வேண்டியிருக்கலாம், ஏனெனில் மருத்துவ ஹைபர்கொலஸ்ட்ராலேமியா சில நேரங்களில் பல மரபணு மாறுபாடுகள் மற்றும் வாழ்க்கை முறையால் ஏற்படலாம். இருப்பினும், எதிர்மறையான முடிவு என்றால் உங்கள் பிள்ளைகள் அல்லது உறவினர்களிடம் சோதிக்க தெளிவான ஒற்றை மரபணு காரணம் இல்லை என்று பொருள்.",
        vusTitle: "நிச்சயமற்ற முக்கியத்துவம் வாய்ந்த மாறுபாடு (VUS)",
        vusDesc: "உங்கள் டிஎன்ஏவில் ஒரு மாறுபாடு கண்டறியப்பட்டுள்ளது என்று பொருள், ஆனால் அது எஃப்ஹெச் நோயை ஏற்படுத்துமா அல்லது வெறும் தீங்கற்ற சாதாரண மாறுபாடா என்று கூற விஞ்ஞானிகளிடம் இன்னும் போதுமான மருத்துவ சான்றுகள் இல்லை. நீங்கள் இதற்காக மரபணு எஃப்ஹெச் நோயால் பாதிக்கப்பட்டுள்ளதாக கண்டறியப்படவில்லை. உங்கள் கொலஸ்ட்ரால் அளவுகள் மற்றும் அறிகுறிகளின் அடிப்படையில் உங்கள் மருத்துவக் குழு உங்கள் ஆரோக்கியத்தை நிர்வகிக்கும், மேலும் புதிய மருத்துவத் தரவுகளை அவ்வப்போது மதிப்பாய்வு செய்யும்."
      },
      insurance: {
        title: "7. மரபணு சோதனை, காப்பீடு, & சிங்கப்பூரின் ஒத்திவைப்பு ஒப்பந்தம்",
        source: "சிஎன்ஏ & சிங்கப்பூர் சுகாதார அமைச்சகம் (MOH வழிகாட்டுதல்கள்)",
        subtitle: "தேசிய ஒப்பந்தங்களின் கீழ் உங்கள் காப்பீட்டு பாதுகாப்பு பாதுகாக்கப்படுகிறது.",
        text1: "மரபணு பரிசோதனை செய்துகொள்வது சிங்கப்பூரில் உங்களுக்கோ அல்லது உங்கள் குடும்பத்தினருக்கோ ஆரோக்கியம் அல்லது ஆயுள் காப்பீடு பெறுவதைத் தடுக்குமா என்பது ஒரு பொதுவான கவலையாகும். இதற்கான பதில் மிகவும் நிம்மதியளிக்கிறது.",
        text2: "மரபணு சோதனை மற்றும் காப்பீடு மீதான சுகாதார அமைச்சகத்தின் ஒத்திவைப்பு ஒப்பந்தத்தின் கீழ் (Moratorium on Genetic Testing and Insurance), சிங்கப்பூரில் பதிவுசெய்யப்பட்ட காப்பீட்டு நிறுவனங்கள், பெரும்பாலான குடும்பங்களின் தேவைகளை உள்ளடக்கிய மிக உயர்ந்த நிதி வரம்புகள் வரை முக்கிய பாலிசிகளுக்கான (ஆயுள் காப்பீடு, முழுமையான நிரந்தர ஊனம் மற்றும் கடுமையான நோய் பாதுகாப்பு உட்பட) விண்ணப்பங்களை மதிப்பிட, முன்கணிப்பு மரபணு சோதனை முடிவுகளைக் கேட்கவோ அல்லது பயன்படுத்தவோ முடியாது. இது நோயாளிகள் எதிர்கால காப்பீட்டை இழப்பதைப் பற்றி கவலைப்படாமல் தேவையான மருத்துவ பரிசோதனையை மேற்கொள்ள முடியும் என்பதை உறுதி செய்கிறது."
      },
      resources: {
        title: "8. சிங்கப்பூரில் உள்ள ஆதரவு வளங்கள்",
        source: "சிங்ஹெல்த் ஹெல்த்பட்டி, ஹெல்த்அப், & ஜிஏசி",
        buddyTitle: "சிங்ஹெல்த் ஹெல்த் பட்டி நோயாளி போர்ட்டல்",
        buddyDesc: "சந்திப்புகளை எளிதாகக் கண்காணிக்கவும், ஆய்வக அறிக்கைகளைப் பார்க்கவும், மருந்து ரீஃபில்களை ஆர்டர் செய்யவும் மற்றும் உங்கள் ஸ்மார்ட்போனிலேயே இருதய ஆரோக்கியக் கட்டுரைகளைப் படிக்கவும்.",
        healthupTitle: "ஹெல்த்அப் சமூக ஆரோக்கிய திட்டம்",
        healthupDesc: "உங்கள் உணவுமுறை, உடற்பயிற்சி மற்றும் இருதய பராமரிப்பு வழக்கத்தை ஆதரிக்க தனிப்பயனாக்கப்பட்ட சுகாதார பயிற்சியாளர்களுடன் உங்களை இணைக்கும் உள்ளூர் சமூக ஆரோக்கிய முன்முயற்சி.",
        gacTitle: "மரபணு மதிப்பீட்டு மையம் (GAC)",
        gacDesc: "மருத்துவ மரபியலுக்காக அர்ப்பணிக்கப்பட்ட சிங்கப்பூரின் முதன்மையான வசதி. முக்கிய மருத்துவமனை கிளஸ்டர்களுக்குள் அமைந்துள்ளது, அன்பான, நிபுணத்துவ மரபணு ஆலோசனைகளை வழங்குகிறது."
      },
      video: {
        title: "9. கல்வி வீடியோ: எஃப்ஹெச்-ஐப் புரிந்துகொள்வது",
        source: "யூடியூப் மருத்துவ விளக்குநர் (துணை வளங்கள்)",
        desc: "எஃப்ஹெச் உடலில் எவ்வாறு செயல்படுகிறது மற்றும் நவீன மருத்துவம் உங்கள் இதய ஆரோக்கியத்தை எவ்வாறு பாதுகாக்கிறது என்பதை விவரிக்கும் விரிவான, நோயாளிக்கு ஏற்ற வீடியோவைப் பாருங்கள்."
      }
    }
  }
};
