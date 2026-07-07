import React, { useState } from 'react';
import { HelpCircle, Heart, ShieldAlert, Award } from 'lucide-react';

export interface GlossaryItem {
  term: string;
  definition: string;
}

export const glossaryData: Record<'en' | 'zh' | 'ms' | 'ta', Record<string, GlossaryItem>> = {
  en: {
    cholesterol: {
      term: "Cholesterol",
      definition: "A waxy, fat-like substance made by your liver and found in certain foods. It is essential for making cell membranes and hormones, but too much in the blood can build up inside your arteries, narrowing them."
    },
    ldl: {
      term: "LDL (Low-Density Lipoprotein)",
      definition: "Often called 'bad cholesterol'. High levels can slowly build up as hard plaques inside your arteries. For patients with FH, LDL levels are extremely high from birth because the liver lacks the normal ability to filter it out."
    },
    mutation: {
      term: "Genetic Mutation",
      definition: "A tiny spelling variation in our DNA code. An FH-related mutation usually occurs in the LDLR, APOB, or PCSK9 genes, which impairs how the liver clears cholesterol from the bloodstream."
    },
    cascade: {
      term: "Cascade Testing",
      definition: "The systematic clinical process of offering simple cholesterol screening or genetic testing to biological relatives of a diagnosed patient. This helps catch the condition early and prevent heart events."
    },
    moratorium: {
      term: "Insurance Moratorium",
      definition: "A national agreement in Singapore that protects patients. It states that registered insurers cannot demand or use predictive genetic test results to deny coverage or raise premiums for common life or health insurance policies."
    }
  },
  zh: {
    cholesterol: {
      term: "胆固醇",
      definition: "由肝脏产生并存在于某些食物中的一种蜡状脂肪样物质。它是构建细胞膜和制造荷尔蒙的必需物质，但血液中若过多，会在动脉内积聚并使之变窄。"
    },
    ldl: {
      term: "低密度脂蛋白（LDL）",
      definition: "通常被称为“坏胆固醇”。高水平的LDL会在动脉内部缓慢积聚成坚硬的斑块。对于家族性高胆固醇血症（FH）患者，低密度脂蛋白（LDL）水平自出生起就极高，因为肝脏无法正常将其过滤清除。"
    },
    mutation: {
      term: "基因突变",
      definition: "DNA代码中的微小拼写变化。与家族性高胆固醇血症（FH）相关的突变通常发生在 LDLR、APOB 或 PCSK9 基因中，从而削弱了肝脏清除血液中胆固醇的能力。"
    },
    cascade: {
      term: "家属级联筛查 (Cascade Testing)",
      definition: "有系统地为已确诊患者的直系亲属提供胆固醇检查或基因检测。这能帮助家属及早发现病情，并在出现症状前采取有效的保护措施。"
    },
    moratorium: {
      term: "保险暂停索要基因结果协议",
      definition: "新加坡政府与保险行业签署的一项国家级患者保护性协议。协议规定，对于普通保额的人寿、重大疾病或残疾保险，保险公司不得强制要求或使用您的基因检测结果来拒绝承保或加收保费。"
    }
  },
  ms: {
    cholesterol: {
      term: "Kolesterol",
      definition: "Bahan berlilin seperti lemak yang dihasilkan oleh hati dan didapati dalam makanan tertentu. Walaupun penting, jika terlalu banyak ia boleh menyempitkan saluran darah."
    },
    ldl: {
      term: "LDL (Lipoprotein Ketumpatan Rendah)",
      definition: "Sering dikenali sebagai 'kolesterol jahat'. Tahap yang tinggi boleh membina mendapan plak di dalam arteri. Bagi penghidap FH, tahap LDL tersangat tinggi sejak lahir kerana hati sukar menapis kolesterol ini."
    },
    mutation: {
      term: "Mutasi Genetik",
      definition: "Perubahan kecil dalam kod DNA kita. Mutasi berkaitan FH biasanya berlaku pada gen LDLR, APOB, atau PCSK9, yang mengganggu keupayaan hati untuk membersihkan kolesterol dari darah."
    },
    cascade: {
      term: "Ujian Cascade",
      definition: "Proses menawarkan saringan kolesterol atau ujian genetik kepada saudara terdekat pesakit yang telah didiagnosis. Ia membantu mencegah komplikasi jantung awal pada ahli keluarga."
    },
    moratorium: {
      term: "Moratorium Insurans",
      definition: "Perjanjian kebangsaan di Singapura yang melindungi pesakit, menghalang syarikat insurans daripada menuntut atau menggunakan keputusan ujian genetik ramalan untuk menetapkan premium atau menafikan perlindungan biasa."
    }
  },
  ta: {
    cholesterol: {
      term: "கொலஸ்ட்ரால்",
      definition: "கல்லீரலால் உற்பத்தி செய்யப்படும் ஒரு மெழுகு போன்ற கொழுப்புப் பொருள். இது உடல் செல்களுக்குத் தேவை, ஆனால் இரத்தத்தில் இது அதிகரித்தால் இரத்த நாளங்கள் குறுகிவிடும்."
    },
    ldl: {
      term: "குறைந்த அடர்த்தி கொண்ட லிப்போபுரோட்டீன் (LDL)",
      definition: "பொதுவாக 'கெட்ட கொலஸ்ட்ரால்' என்று அழைக்கப்படுகிறது. எஃப்ஹெச் (FH) நோயாளிகளுக்கு கல்லீரல் இதைக் குறைக்கும் திறனை இழப்பதால், பிறப்பிலிருந்தே LDL மிக அதிகமாக இருக்கும்."
    },
    mutation: {
      term: "மரபணு மாற்றம்",
      definition: "நமது டிஎன்ஏவில் ஏற்படும் சிறிய மாறுபாடு. எஃப்ஹெச் (FH) தொடர்பான மரபணு மாற்றம் LDLR, APOB அல்லது PCSK9 மரபணுக்களில் நிகழ்ந்து, கொலஸ்ட்ராலை அகற்றும் கல்லீரலின் திறனைப் பாதிக்கிறது."
    },
    cascade: {
      term: "உறுப்பினர்கள் சோதனை (Cascade Testing)",
      definition: "பாதிக்கப்பட்ட நோயாளியின் குடும்ப உறவினர்களுக்கு கொலஸ்ட்ரால் அல்லது மரபணு சோதனையை வழங்கும் மருத்துவ முறை. இது மாரடைப்பு அபாயத்தைத் தடுக்க உதவுகிறது."
    },
    moratorium: {
      term: "காப்பீட்டு ஒத்திவைப்பு ஒப்பந்தம்",
      definition: "சிங்கப்பூரின் தேசிய பாதுகாப்பு ஒப்பந்தம். இதன்படி, ஆயுள் அல்லது சுகாதார காப்பீடு வழங்க விண்ணப்பதாரர்களின் மரபணு சோதனை முடிவுகளைக் கேட்க காப்பீட்டு நிறுவனங்களுக்குத் தடை விதிக்கப்பட்டுள்ளது."
    }
  }
};

interface TooltipProps {
  termKey: 'cholesterol' | 'ldl' | 'mutation' | 'cascade' | 'moratorium';
  lang: 'en' | 'zh' | 'ms' | 'ta';
  children: React.ReactNode;
}

export const InteractiveTooltip: React.FC<TooltipProps> = ({ termKey, lang, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const data = glossaryData[lang][termKey];

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="underline decoration-dotted decoration-blue-500 hover:text-blue-700 font-medium cursor-help focus:outline-hidden"
        aria-haspopup="true"
        aria-expanded={isVisible}
      >
        {children}
      </button>
      
      {isVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 text-white text-xs rounded-xl shadow-lg z-30 leading-relaxed text-center animate-in fade-in slide-in-from-bottom-1 duration-100">
          <span className="font-bold text-blue-400 block mb-1">
            {data.term}
          </span>
          {data.definition}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
        </span>
      )}
    </span>
  );
};

interface GlossaryProps {
  lang: 'en' | 'zh' | 'ms' | 'ta';
}

export const GlossarySection: React.FC<GlossaryProps> = ({ lang }) => {
  const items = glossaryData[lang];

  return (
    <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-8 mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
          ?
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-800">
            {lang === 'zh' ? "患者词汇小贴士" : lang === 'ms' ? "Glosari Perubatan Pesakit" : lang === 'ta' ? "மருத்துவச் சொற்கள் விளக்கம்" : "Patient Friendly Glossary"}
          </h3>
          <p className="text-slate-500 text-xs mt-0.5">
            {lang === 'zh' ? "用最通俗易懂的语言，帮您快速看懂体检表和诊断书" : lang === 'ms' ? "Memahami istilah perubatan dalam perkataan yang paling mudah" : lang === 'ta' ? "கடினமான சொற்களை எளிமையாகப் புரிந்துகொள்ளுங்கள்" : "We translate clinical terms into plain, reassuring language"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(Object.entries(items) as [string, GlossaryItem][]).map(([key, item]) => (
          <div key={key} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col">
            <span className="font-display font-bold text-slate-800 text-sm border-b border-slate-100 pb-2 mb-2 flex items-center justify-between">
              <span>{item.term}</span>
              <HelpCircle className="w-4 h-4 text-blue-500" />
            </span>
            <p className="text-slate-500 text-xs leading-relaxed grow">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
