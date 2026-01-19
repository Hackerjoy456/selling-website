import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1")
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2")
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3")
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4")
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5")
    },
    {
      question: t("faq.q6"),
      answer: t("faq.a6")
    },
    {
      question: t("faq.q7"),
      answer: t("faq.a7")
    },
    {
      question: t("faq.q8"),
      answer: t("faq.a8")
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

        <div className="inline-block mb-6 relative hover:scale-105 transition-transform duration-500">
          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl glassy-card flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(138,61,255,0.2)]">
            <HelpCircle className="w-10 h-10 text-secondary drop-shadow-[0_0_10px_rgba(138,61,255,0.5)]" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
          {t("faq.title")}
        </h1>
        <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-secondary to-primary rounded-full mb-8"></div>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
          {t("faq.subtitle")}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                ? "border-primary/50 bg-white/10 shadow-[0_0_20px_rgba(0,234,255,0.1)]"
                : "border-white/5 hover:border-white/10"
              }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 group"
            >
              <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? "text-primary" : "text-white group-hover:text-primary/80"
                }`}>
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="px-6 pb-6 pt-0">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12 text-center p-8 rounded-3xl glass-card border border-white/10">
          <p className="text-white font-bold text-lg mb-2">{t("faq.stillQuestions")}</p>
          <p className="text-gray-400 mb-6">{t("faq.cantFind")}</p>
          <a
            href="https://wa.me/8801629933030"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            {t("faq.chat")}
          </a>
        </div>
      </div>
    </div>
  );
}
