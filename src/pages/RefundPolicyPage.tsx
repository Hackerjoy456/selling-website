import { RefreshCw, Clock, CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function RefundPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10"></div>

          <div className="inline-block mb-6 relative hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-primary opacity-20 blur-xl rounded-full"></div>
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-3xl glassy-card flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(255,79,216,0.2)]">
              <RefreshCw className="w-10 h-10 text-accent drop-shadow-[0_0_10px_rgba(255,79,216,0.5)]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {t("refund.title")}
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <p className="text-sm font-medium text-gray-400">
              {t("refund.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-black text-white">{t("refund.eligibility")}</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {t("refund.eligibilityText")}
              </p>
              <ul className="space-y-3">
                {[t("refund.eligible1"), t("refund.eligible2"), t("refund.eligible3")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-red-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h2 className="text-xl font-black text-white">{t("refund.nonEligible")}</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {t("refund.nonEligibleText")}
              </p>
              <ul className="space-y-3">
                {[t("refund.nonEligible1"), t("refund.nonEligible2"), t("refund.nonEligible3")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="glass-card p-6 md:p-10 rounded-3xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-black text-white">{t("refund.process")}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: t("refund.step1Title"), text: t("refund.step1Text") },
                { title: t("refund.step2Title"), text: t("refund.step2Text") },
                { title: t("refund.step3Title"), text: t("refund.step3Text") }
              ].map((step, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary font-black text-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.text}</p>

                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-white/20">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card p-6 rounded-2xl border-l-4 border-l-yellow-500">
            <div className="flex gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{t("refund.important")}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t("refund.importantText")}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
