import { Shield, Lock, Eye, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10"></div>

          <div className="inline-block mb-6 relative hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-xl rounded-full"></div>
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-3xl glassy-card flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(0,234,255,0.2)]">
              <Shield className="w-10 h-10 text-primary drop-shadow-[0_0_10px_rgba(0,234,255,0.5)]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            {t("privacy.title")}
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <p className="text-sm font-medium text-gray-400">
              {t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <section className="glass-card p-6 md:p-10 rounded-3xl hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">{t("privacy.introduction")}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("privacy.introText")}
            </p>
          </section>

          <section className="glass-card p-6 md:p-10 rounded-3xl hover:border-secondary/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-secondary/10 border border-secondary/20">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">{t("privacy.dataCollection")}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("privacy.dataCollectionText")}
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {[t("privacy.data1"), t("privacy.data2"), t("privacy.data3"), t("privacy.data4")].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-6 md:p-10 rounded-3xl hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">{t("privacy.dataUsage")}</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("privacy.dataUsageText")}
            </p>
            <ul className="space-y-3">
              {[t("privacy.usage1"), t("privacy.usage2"), t("privacy.usage3"), t("privacy.usage4")].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="grid md:grid-cols-2 gap-6">
            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h2 className="text-xl font-black text-white">{t("privacy.dataProtection")}</h2>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t("privacy.dataProtectionText")}
              </p>
            </section>

            <section className="glass-card p-6 md:p-8 rounded-3xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-xl font-black text-white mb-4">{t("privacy.contact")}</h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {t("privacy.contactText")}
                </p>
                <div className="inline-block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm font-bold">
                  support@randomcheatselling.com
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
