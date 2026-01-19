import { FileText, CheckCircle2, XCircle, AlertTriangle, Shield, RefreshCw, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-secondary/20 rounded-full blur-[80px] -z-10"></div>

          <div className="inline-block mb-6 relative hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-accent opacity-20 blur-xl rounded-full"></div>
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-3xl glassy-card flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(138,61,255,0.2)]">
              <Scale className="w-10 h-10 text-secondary drop-shadow-[0_0_10px_rgba(138,61,255,0.5)]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {t("terms.title")}
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
            <p className="text-sm font-medium text-gray-400">
              {t("terms.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Acceptance */}
          <section className="glass-card p-6 md:p-10 rounded-3xl hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">{t("terms.acceptance")}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed font-medium">
              {t("terms.acceptanceText")}
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service & Purchases */}
            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-primary/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-black text-white">{t("terms.serviceDescription")}</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {t("terms.serviceDescriptionText")}
              </p>

              <div className="border-t border-white/10 my-6" />

              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-secondary" />
                <h2 className="text-lg font-black text-white">{t("terms.purchases")}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-4">{t("terms.purchasesText")}</p>
              <ul className="space-y-2">
                {[t("terms.purchase1"), t("terms.purchase2"), t("terms.purchase3")].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Responsibilities */}
            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-accent/30 transition-all duration-300">
              <h2 className="text-xl font-black text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                {t("terms.userResponsibilities")}
              </h2>
              <p className="text-sm text-gray-300 mb-6">{t("terms.userResponsibilitiesText")}</p>
              <div className="space-y-3">
                {[t("terms.responsibility1"), t("terms.responsibility2"), t("terms.responsibility3"), t("terms.responsibility4")].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Prohibited Uses */}
          <section className="glass-card p-6 md:p-10 rounded-3xl border-red-500/20 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
                <XCircle className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">{t("terms.prohibitedUses")}</h2>
            </div>
            <p className="text-gray-300 mb-6">{t("terms.prohibitedUsesText")}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[t("terms.prohibited1"), t("terms.prohibited2"), t("terms.prohibited3"), t("terms.prohibited4")].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/10 text-red-200/80 text-sm">
                  <XCircle className="w-4 h-4 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover:bg-yellow-500/5 hover:border-yellow-500/30 transition-all">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{t("terms.liability")}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t("terms.liabilityText")}</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all">
              <RefreshCw className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{t("terms.refunds")}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{t("terms.refundsText")}</p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4 text-white font-bold">@</div>
              <h3 className="text-lg font-bold text-white mb-2">{t("terms.contact")}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {['WhatsApp', 'Telegram', 'Discord'].map((social) => (
                  <span key={social} className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-gray-300 border border-white/10">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
