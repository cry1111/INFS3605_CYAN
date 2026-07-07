import { LanguageConfig } from "./types";

export const LANGUAGES: Record<string, LanguageConfig> = {
  en: {
    code: "en",
    label: "English",
    localLabel: "English",
    title: "GAC FH Genetic Testing Assistant",
    subtitle: "SingHealth Genomic Assessment Centre (GAC)",
    tagline: "Educational guidance for patients referred for Familial Hypercholesterolaemia (FH) genetic testing.",
    inputPlaceholder: "Ask me about FH, genetic testing, or counselling...",
    sendButton: "Send",
    starterTitle: "How can I help you today?",
    checklistTitle: "Pre-appointment Checklist",
    checklistDesc: "Prepare for your pre-test genetic counselling session:",
    moratoriumTitle: "Singapore Insurance Moratorium",
    moratoriumDesc: "Insurers cannot use preventive genetic tests for underwriting under standard limits (e.g. S$2M Life, S$500K CI).",
    clearChat: "Clear Conversation",
    clinicInfo: "GAC Location & Contact",
    gacLabel: "Genomic Assessment Centre",
    checklistItems: [
      { id: "family", text: "Gather family history of high cholesterol or early heart issues." },
      { id: "meds", text: "List down all current medications, especially statins." },
      { id: "questions", text: "Write down any questions for your genetic counsellor." },
      { id: "financial", text: "Bring identification card for subsidy verification." }
    ],
    starters: [
      { id: "what_is_fh", label: "What is FH?", text: "What is FH?" },
      { id: "testing_process", label: "Testing Process", text: "What does the testing process involve?" },
      { id: "cost", label: "Cost & Subsidies", text: "What does it cost?" },
      { id: "insurance", label: "Insurance Moratorium", text: "How does this affect my insurance?" },
      { id: "why_test", label: "Why get tested?", text: "Why should I get tested?" },
      { id: "faqs", label: "Other FAQs", text: "What are some other FAQs?" }
    ]
  },
  zh: {
    code: "zh",
    label: "Chinese",
    localLabel: "中文",
    title: "GAC 家族性高胆固醇血症 (FH) 基因检测助手",
    subtitle: "新保集团基因评估中心 (GAC)",
    tagline: "为被转介进行家族性高胆固醇血症 (FH) 基因检测的患者提供科普指导。",
    inputPlaceholder: "向我咨询有关 FH、基因检测或咨询的问题...",
    sendButton: "发送",
    starterTitle: "今天我可以如何帮您？",
    checklistTitle: "预约前准备清单",
    checklistDesc: "为您的检测前基因咨询做好准备：",
    moratoriumTitle: "新加坡保险自愿暂停披露协定",
    moratoriumDesc: "在标准限额内（例如 200万新元寿险、50万新元重大疾病险），保险公司不得使用预防性基因检测结果评估保单。",
    clearChat: "清除对话",
    clinicInfo: "GAC 地点与联系方式",
    gacLabel: "基因评估中心",
    checklistItems: [
      { id: "family", text: "收集家族中高胆固醇或早期心脏病的病史。" },
      { id: "meds", text: "列出当前服用的所有药物，特别是降胆固醇药（他汀类）。" },
      { id: "questions", text: "写下您想向基因咨询师咨询的所有问题。" },
      { id: "financial", text: "携带身份证件以核对补贴资格。" }
    ],
    starters: [
      { id: "what_is_fh", label: "什么是 FH？", text: "什么是 FH？" },
      { id: "testing_process", label: "检测流程", text: "检测流程包括哪些步骤？" },
      { id: "cost", label: "费用与补贴", text: "检测费用是多少？" },
      { id: "insurance", label: "保险影响", text: "这会如何影响我的保险？" },
      { id: "why_test", label: "为什么要检测？", text: "我为什么应该接受检测？" },
      { id: "faqs", label: "其他常见问题", text: "还有哪些其他常见问题？" }
    ]
  },
  ms: {
    code: "ms",
    label: "Malay",
    localLabel: "Melayu",
    title: "Pembantu Ujian Genetik FH GAC",
    subtitle: "Pusat Penilaian Genomik SingHealth (GAC)",
    tagline: "Panduan pendidikan untuk pesakit yang dirujuk untuk ujian genetik Familial Hypercholesterolaemia (FH).",
    inputPlaceholder: "Tanya saya mengenai FH, ujian genetik, atau kaunseling...",
    sendButton: "Hantar",
    starterTitle: "Bagaimana saya boleh membantu anda hari ini?",
    checklistTitle: "Senarai Semak Sebelum Janji Temu",
    checklistDesc: "Bersedia untuk sesi kaunseling genetik pra-ujian anda:",
    moratoriumTitle: "Moratorium Insurans Singapura",
    moratoriumDesc: "Syarikat insurans tidak boleh menggunakan keputusan ujian genetik pencegahan untuk underwriting di bawah had standard (cth. S$2J Hayat, S$500K CI).",
    clearChat: "Padam Perbualan",
    clinicInfo: "Lokasi & Hubungi GAC",
    gacLabel: "Pusat Penilaian Genomik",
    checklistItems: [
      { id: "family", text: "Kumpulkan sejarah keluarga mengenai kolesterol tinggi atau masalah jantung awal." },
      { id: "meds", text: "Senaraikan semua ubat semasa, terutamanya statin." },
      { id: "questions", text: "Tulis sebarang soalan untuk kaunselor genetik anda." },
      { id: "financial", text: "Bawa kad pengenalan untuk pengesahan subsidi." }
    ],
    starters: [
      { id: "what_is_fh", label: "Apakah FH?", text: "Apakah FH?" },
      { id: "testing_process", label: "Proses Ujian", text: "Apakah yang terlibat dalam proses ujian?" },
      { id: "cost", label: "Kos & Subsidi", text: "Berapakah kosnya?" },
      { id: "insurance", label: "Moratorium Insurans", text: "Bagaimanakah ini mempengaruhi insurans saya?" },
      { id: "why_test", label: "Mengapa diuji?", text: "Mengapa saya harus diuji?" },
      { id: "faqs", label: "Soalan Lazim Lain", text: "Apakah soalan lazim lain?" }
    ]
  },
  ta: {
    code: "ta",
    label: "Tamil",
    localLabel: "தமிழ்",
    title: "GAC FH மரபணு சோதனை உதவியாளர்",
    subtitle: "சிங்ஹெல்த் ஜெனோமிக் மதிப்பீட்டு மையம் (GAC)",
    tagline: "குடும்ப ஹைப்பர் கொலஸ்டிரோலீமியா (FH) மரபணு சோதனைக்கு பரிந்துரைக்கப்பட்ட நோயாளிகளுக்கான கல்வி வழிகாட்டி.",
    inputPlaceholder: "FH, மரபணு சோதனை அல்லது ஆலோசனை பற்றி என்னிடம் கேளுங்கள்...",
    sendButton: "அனுப்பு",
    starterTitle: "இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
    checklistTitle: "சந்திப்பிற்கு முந்தைய சரிபார்ப்புப் பட்டியல்",
    checklistDesc: "உங்கள் சோதனைக்கு முந்தைய மரபணு ஆலோசனை அமர்வுக்கு தயாராகுங்கள்:",
    moratoriumTitle: "சிங்கப்பூர் காப்பீட்டு ஒத்திவைப்பு",
    moratoriumDesc: "காப்பீட்டாளர்கள் நிலையான வரம்புகளின் கீழ் (எ.கா. S$2M ஆயுள், S$500K CI) காப்பீட்டு பரிசீலனைக்கு தடுப்பு மரபணு சோதனைகளைப் பயன்படுத்த முடியாது.",
    clearChat: "உரையாடலை அழி",
    clinicInfo: "GAC இருப்பிடம் & தொடர்பு",
    gacLabel: "ஜெனோமிக் மதிப்பீட்டு மையம்",
    checklistItems: [
      { id: "family", text: "அதிக கொலஸ்ட்ரால் அல்லது ஆரம்பகால இதயப் பிரச்சினைகள் பற்றிய குடும்ப வரலாற்றைச் சேகரிக்கவும்." },
      { id: "meds", text: "தற்போது எடுத்துக்கொள்ளும் அனைத்து மருந்துகளையும், குறிப்பாக ஸ்டேடின்களை பட்டியலிடவும்." },
      { id: "questions", text: "உங்கள் மரபணு ஆலோசகருக்கான கேள்விகளை எழுதி வைக்கவும்." },
      { id: "financial", text: "மானியச் சரிபார்ப்பிற்கான அடையாள அட்டையைக் கொண்டு வாருங்கள்." }
    ],
    starters: [
      { id: "what_is_fh", label: "FH என்றால் என்ன?", text: "FH என்றால் என்ன?" },
      { id: "testing_process", label: "சோதனை செயல்முறை", text: "சோதனை செயல்முறையில் என்ன அடங்கும்?" },
      { id: "cost", label: "செலவு & மானியங்கள்", text: "இதற்கு எவ்வளவு செலவாகும்?" },
      { id: "insurance", label: "காப்பீட்டு ஒத்திவைப்பு", text: "இது எனது காப்பீட்டை எவ்வாறு பாதிக்கும்?" },
      { id: "why_test", label: "ஏன் சோதனை செய்ய வேண்டும்?", text: "நான் ஏன் சோதனை செய்ய வேண்டும்?" },
      { id: "faqs", label: "இதர கேள்விகள்", text: "வேறு சில இதர கேள்விகள் யாவை?" }
    ]
  }
};
