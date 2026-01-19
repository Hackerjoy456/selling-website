import { Shield, Zap, Star, Users, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn">
      {/* Hero Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-lg">
          {t("about.title")}
        </h1>
        <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
          {t("about.subtitle")}
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <div className="glass-card p-8 md:p-12 rounded-[2rem] hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-3xl font-black text-white mb-6 relative z-10">{t("about.missionTitle")}</h2>
          <p className="text-base text-gray-300 leading-relaxed font-medium relative z-10">
            {t("about.missionText")}
          </p>
        </div>
        <div className="glass-card p-8 md:p-12 rounded-[2rem] hover:border-secondary/50 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-3xl font-black text-white mb-6 relative z-10">{t("about.visionTitle")}</h2>
          <p className="text-base text-gray-300 leading-relaxed font-medium relative z-10">
            {t("about.visionText")}
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">
          {t("about.valuesTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: t("about.values.trust"), desc: t("about.values.trustDesc"), color: "text-primary" },
            { icon: Zap, title: t("about.values.innovation"), desc: t("about.values.innovationDesc"), color: "text-yellow-400" },
            { icon: Star, title: t("about.values.quality"), desc: t("about.values.qualityDesc"), color: "text-accent" },
            { icon: Users, title: t("about.values.community"), desc: t("about.values.communityDesc"), color: "text-green-400" },
            { icon: Award, title: t("about.values.excellence"), desc: t("about.values.excellenceDesc"), color: "text-orange-400" },
            { icon: TrendingUp, title: t("about.values.growth"), desc: t("about.values.growthDesc"), color: "text-blue-400" },
          ].map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl glass-card hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>
              <h3 className="text-xl font-black text-white mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400 font-medium">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: "10K+", label: t("about.stats.customers") },
          { number: "50+", label: t("about.stats.products") },
          { number: "24/7", label: t("about.stats.support") },
          { number: "100%", label: t("about.stats.satisfaction") },
        ].map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-3xl glass-card relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
