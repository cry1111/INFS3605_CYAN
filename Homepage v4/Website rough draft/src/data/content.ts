import { Translation, Language } from '../types';

const englishContent: Translation = {
  languageSelection: "Please select your preferred language",
  disclaimerTitle: "Important Notice",
  disclaimer: "This website provides educational information only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your doctor, genetic counsellor, or other qualified healthcare provider with any questions you may have regarding a medical condition.",
  home: "Home",
  fhRoadmap: "FH Roadmap",
  aboutFh: "About FH",
  geneticTesting: "Genetic Testing",
  preTestCounselling: "Pre-test Counselling",
  faqs: "FAQs",
  educationalResources: "Educational Resources",
  chatbot: "Chatbot",
  searchPlaceholder: "Search keywords...",
  roadmapTitle: "Your FH Testing Journey",
  roadmapSubtitle: "Understanding the steps from referral to results and management.",
  faqTitle: "Frequently Asked Questions",
  aboutFhTitle: "Understanding Familial Hypercholesterolaemia (FH)",
  testingTitle: "Genetic Testing",
  counsellingTitle: "Pre-test Genetic Counselling",
  resourcesTitle: "Educational Resources",
  chatbotTitle: "FH Assistant",
  chatbotDisclaimer: "I provide educational information only and cannot replace personalised medical advice.",
  chatbotInputPlaceholder: "Ask me a question about FH...",
  stages: [
    {
      id: "gp",
      title: "1. GP Referral",
      description: "Your GP suspects you may have FH based on your cholesterol levels or family history.",
      details: "Your General Practitioner (GP) has identified that you might be at risk of Familial Hypercholesterolaemia. This is usually due to a very high cholesterol blood test result or a strong family history of early heart disease. They have referred you to a specialist clinic for further investigation."
    },
    {
      id: "counselling",
      title: "2. Pre-test Counselling",
      description: "A meeting with a specialist or genetic counsellor to discuss testing.",
      details: "During this appointment, a healthcare professional will explain what FH is, how it is inherited, and what genetic testing involves. You will discuss the potential benefits, limitations, and implications of the test for you and your family, helping you make an informed decision."
    },
    {
      id: "decision",
      title: "3. Decision about Testing",
      description: "You decide whether you want to proceed with the genetic test.",
      details: "After discussing your options, you will decide if genetic testing is the right choice for you right now. Testing is voluntary, and you can take your time to decide."
    },
    {
      id: "sample",
      title: "4. Sample Collection",
      description: "Providing a blood or saliva sample.",
      details: "If you decide to proceed, a small sample of your blood or saliva will be collected. This is a quick and standard procedure."
    },
    {
      id: "lab",
      title: "5. Laboratory Testing",
      description: "Your sample is analysed in a specialised genetic laboratory.",
      details: "The laboratory will extract DNA from your sample and search for specific changes (mutations or variants) in the genes that cause FH. This process can take several weeks or months."
    },
    {
      id: "results",
      title: "6. Results Appointment",
      description: "Discussing your test results with your healthcare team.",
      details: "You will meet with your doctor or genetic counsellor to receive your results. They will explain what the results mean for your health, your treatment options, and whether your family members should be tested."
    },
    {
      id: "cascade",
      title: "7. Family (Cascade) Testing",
      description: "Testing relatives if a genetic cause is found.",
      details: "If an FH-causing gene change is found in you, your first-degree relatives (parents, siblings, children) have a 50% chance of having it too. They will be offered 'cascade testing' to check for the same specific gene change."
    },
    {
      id: "management",
      title: "8. Ongoing Management",
      description: "Managing cholesterol through lifestyle and medication.",
      details: "Whether your genetic test is positive or negative, if you have high cholesterol, it needs to be managed. This usually involves a combination of a heart-healthy diet, regular exercise, and cholesterol-lowering medications like statins."
    }
  ],
  faqsList: [
    {
      question: "What is Familial Hypercholesterolaemia (FH)?",
      answer: "FH is an inherited condition that causes high levels of LDL ('bad') cholesterol in the blood from birth. If left untreated, it can lead to early heart disease."
    },
    {
      question: "Why have I been referred?",
      answer: "You have been referred because your cholesterol levels are unusually high, or there is a pattern of high cholesterol or early heart disease in your family, which suggests you might have FH."
    },
    {
      question: "What happens during pre-test counselling?",
      answer: "A healthcare professional will discuss your personal and family medical history, explain what FH is, and detail the pros and cons of genetic testing to help you make an informed choice."
    },
    {
      question: "Do I have to undergo genetic testing?",
      answer: "No. Genetic testing is completely voluntary. Your decision will not affect your access to standard medical care or cholesterol-lowering treatments."
    },
    {
      question: "What happens if my result is positive?",
      answer: "A positive result confirms the diagnosis of FH. Your healthcare team will work with you to optimize your cholesterol-lowering medication and lifestyle. Your close relatives will also be offered testing."
    },
    {
      question: "What happens if my result is negative?",
      answer: "A negative result means a specific genetic cause for your high cholesterol was not found. However, you may still have high cholesterol that requires treatment based on your clinical symptoms."
    },
    {
      question: "Will my family need testing?",
      answer: "If a genetic cause for FH is found in you, your close relatives (parents, siblings, children) will be advised to have a genetic test to see if they have inherited the same gene change."
    },
    {
      question: "Can children be tested?",
      answer: "Yes, children can be tested for FH. It is often recommended to test children of parents with FH so that treatment and lifestyle changes can begin early to protect their hearts."
    },
    {
      question: "Will my information remain confidential?",
      answer: "Yes. Your genetic test results are kept strictly confidential in your medical records and are not shared with anyone else, including insurance companies or employers, without your explicit consent."
    },
    {
      question: "How is FH treated?",
      answer: "FH is treated with a combination of healthy lifestyle choices (diet, exercise, not smoking) and cholesterol-lowering medications, most commonly statins. Treatment is usually lifelong."
    }
  ],
  aboutFhContent: [
    {
      title: "What is FH?",
      content: "Familial Hypercholesterolaemia (FH) is a genetic disorder that affects how the body processes cholesterol. People with FH have a genetic mutation that prevents the liver from effectively removing low-density lipoprotein (LDL), often called 'bad' cholesterol, from the blood. This leads to exceptionally high cholesterol levels starting from birth."
    },
    {
      title: "Why Early Diagnosis Matters",
      content: "Because cholesterol builds up in the arteries over time, people with untreated FH are at a significantly higher risk of developing early heart disease, such as a heart attack, often at a young age. Early diagnosis allows for early treatment, which can lower cholesterol levels and dramatically reduce this risk, allowing people with FH to live normal, healthy lives."
    },
    {
      title: "How FH is Inherited",
      content: "FH is passed down through families. If one parent has FH, each of their children has a 50% (1 in 2) chance of inheriting the condition. This type of inheritance is called 'autosomal dominant'."
    }
  ],
  testingContent: [
    {
      title: "Benefits of Genetic Testing",
      content: "A genetic test can definitively confirm a diagnosis of FH. If a specific gene change is found, it makes it much easier to test and identify other family members who may also be at risk (cascade testing). It can also help your doctor tailor your treatment plan more effectively."
    },
    {
      title: "Limitations of Genetic Testing",
      content: "A genetic test may not always find a cause. In about 20-30% of people with a strong clinical diagnosis of FH, no specific genetic mutation is identified. This doesn't mean you don't have high cholesterol or don't need treatment; it just means the specific genetic cause hasn't been found with current technology."
    },
    {
      title: "What the Test Tells You",
      content: "The test can tell you if you carry a specific genetic variant known to cause FH. It does not tell you if or when you will have a heart attack, but it confirms that you have a higher risk that needs to be managed."
    }
  ],
  counsellingContent: [
    {
      title: "Purpose of Pre-test Counselling",
      content: "Genetic testing can have implications not just for your health, but for your family, and sometimes for things like life insurance. Pre-test counselling provides a supportive environment to discuss these issues before you make a decision."
    },
    {
      title: "What to Expect",
      content: "You will discuss your family tree, the medical history of your relatives, and the scientific details of the test in simple terms. You'll have the opportunity to ask questions and explore how you might feel about the possible results."
    }
  ],
  resourcesContent: [
    {
      title: "Lifestyle Management",
      content: "Eating a heart-healthy diet low in saturated fats, getting regular physical activity, maintaining a healthy weight, and not smoking are crucial steps in managing FH alongside medication."
    },
    {
      title: "Medication",
      content: "Statins are the most common and effective medication for lowering LDL cholesterol in people with FH. Other medications, such as ezetimibe or PCSK9 inhibitors, may also be prescribed depending on your individual needs."
    }
  ]
};

const placeholderDisclaimer = "[Medical translation required before deployment. The following text is a placeholder.] ";

const createPlaceholderTranslation = (langName: string): Translation => {
  const t = { ...englishContent };
  Object.keys(t).forEach(key => {
    if (typeof (t as any)[key] === 'string') {
      (t as any)[key] = placeholderDisclaimer + (t as any)[key];
    }
  });
  
  t.stages = t.stages.map(stage => ({
    ...stage,
    title: placeholderDisclaimer + stage.title,
    description: placeholderDisclaimer + stage.description,
    details: placeholderDisclaimer + stage.details,
  }));
  
  t.faqsList = t.faqsList.map(faq => ({
    question: placeholderDisclaimer + faq.question,
    answer: placeholderDisclaimer + faq.answer,
  }));

  t.aboutFhContent = t.aboutFhContent.map(c => ({ title: placeholderDisclaimer + c.title, content: placeholderDisclaimer + c.content }));
  t.testingContent = t.testingContent.map(c => ({ title: placeholderDisclaimer + c.title, content: placeholderDisclaimer + c.content }));
  t.counsellingContent = t.counsellingContent.map(c => ({ title: placeholderDisclaimer + c.title, content: placeholderDisclaimer + c.content }));
  t.resourcesContent = t.resourcesContent.map(c => ({ title: placeholderDisclaimer + c.title, content: placeholderDisclaimer + c.content }));
  
  return t;
}

export const translations: Record<Language, Translation> = {
  en: englishContent,
  zh: createPlaceholderTranslation("Mandarin"),
  ta: createPlaceholderTranslation("Tamil"),
  ms: createPlaceholderTranslation("Malay"),
};
