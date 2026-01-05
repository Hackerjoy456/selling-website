import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Star, MessageCircle, Sparkles, Award, CheckCircle2, Clock, Lock, TrendingUp } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16 md:mb-20">
        <div className="mb-8 sm:mb-10">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#00eaff]"></div>
              <span className="text-xs sm:text-sm font-black text-[#00eaff] uppercase tracking-wider">{t("home.subtitle")}</span>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#00eaff]"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
              RANDOM CHEAT
              <br />
              <span className="bg-gradient-to-r from-[#ff4fd8] via-[#8a3dff] to-[#00eaff] bg-clip-text text-transparent">SELLING</span>
            </h1>
            <div className="h-1 w-20 sm:w-28 mx-auto bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white mb-3 sm:mb-4 font-bold leading-tight">
            {t("home.tagline")}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#a9b0ff] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium">
            {t("home.description")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
          <Button
            asChild
            className="rounded-lg sm:rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:via-[#8a3dff] hover:to-[#00eaff] shadow-[0_0_25px_rgba(138,61,255,0.4)] hover:shadow-[0_0_40px_rgba(138,61,255,0.6)] transition-all duration-300"
          >
            <Link to="/products" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5" />
              <span>{t("home.explore")}</span>
              <ArrowRight className="w-4 h-4 sm:w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-lg sm:rounded-xl px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-bold border-2 border-[#00eaff] hover:bg-[rgba(0,234,255,0.15)] hover:border-[#00eaff] hover:shadow-[0_0_25px_rgba(0,234,255,0.3)] transition-all duration-300 text-white bg-transparent"
          >
            <a
              href="https://wa.me/8801629933030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-6" />
              {t("home.contact")}
            </a>
          </Button>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(0,234,255,0.05)] border-2 border-[rgba(0,234,255,0.3)] hover:border-[#00eaff] hover:shadow-[0_0_30px_rgba(0,234,255,0.4)] transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-[#00eaff] to-[#8a3dff] bg-clip-text text-transparent">{products.length}+</div>
            <div className="text-xs sm:text-sm text-[#a9b0ff] font-bold uppercase tracking-wider">Products</div>
          </div>
          <div className="text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(138,61,255,0.1)] to-[rgba(138,61,255,0.05)] border-2 border-[rgba(138,61,255,0.3)] hover:border-[#8a3dff] hover:shadow-[0_0_30px_rgba(138,61,255,0.4)] transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">24/7</div>
            <div className="text-xs sm:text-sm text-[#a9b0ff] font-bold uppercase tracking-wider">Support</div>
          </div>
          <div className="text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(255,79,216,0.1)] to-[rgba(255,79,216,0.05)] border-2 border-[rgba(255,79,216,0.3)] hover:border-[#ff4fd8] hover:shadow-[0_0_30px_rgba(255,79,216,0.4)] transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] bg-clip-text text-transparent">100%</div>
            <div className="text-xs sm:text-sm text-[#a9b0ff] font-bold uppercase tracking-wider">Secure</div>
          </div>
          <div className="text-center p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border-2 border-[rgba(0,234,255,0.3)] hover:border-[#00eaff] hover:shadow-[0_0_30px_rgba(0,234,255,0.4)] transition-all duration-500 hover:scale-105">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent">∞</div>
            <div className="text-xs sm:text-sm text-[#a9b0ff] font-bold uppercase tracking-wider">Updates</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
              {t("home.whyChoose")}
            </h2>
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 mx-auto bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-[#a9b0ff] max-w-2xl mx-auto font-medium">
            Experience the difference with our premium service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="group text-center p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.15)] via-[rgba(0,234,255,0.08)] to-[rgba(0,234,255,0.05)] border-2 border-[rgba(0,234,255,0.3)] hover:border-[#00eaff] hover:shadow-[0_0_40px_rgba(0,234,255,0.5)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00eaff] to-[#8a3dff] flex items-center justify-center shadow-[0_0_30px_rgba(0,234,255,0.4)] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 text-white">{t("home.trusted")}</h3>
            <p className="text-xs sm:text-sm text-[#a9b0ff] leading-relaxed font-medium">
              All products are verified and safe. Your security and privacy are our top priorities with encrypted transactions.
            </p>
          </div>
          <div className="group text-center p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(138,61,255,0.15)] via-[rgba(138,61,255,0.08)] to-[rgba(138,61,255,0.05)] border-2 border-[rgba(138,61,255,0.3)] hover:border-[#8a3dff] hover:shadow-[0_0_40px_rgba(138,61,255,0.5)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#8a3dff] to-[#ff4fd8] flex items-center justify-center shadow-[0_0_30px_rgba(138,61,255,0.4)] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 text-white">{t("home.instant")}</h3>
            <p className="text-xs sm:text-sm text-[#a9b0ff] leading-relaxed font-medium">
              Get your product immediately after purchase. No waiting, no delays - instant access to premium features.
            </p>
          </div>
          <div className="group text-center p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(255,79,216,0.15)] via-[rgba(255,79,216,0.08)] to-[rgba(255,79,216,0.05)] border-2 border-[rgba(255,79,216,0.3)] hover:border-[#ff4fd8] hover:shadow-[0_0_40px_rgba(255,79,216,0.5)] transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff4fd8] to-[#00eaff] flex items-center justify-center shadow-[0_0_30px_rgba(255,79,216,0.4)] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-2 sm:mb-3 text-white">{t("home.premium")}</h3>
            <p className="text-xs sm:text-sm text-[#a9b0ff] leading-relaxed font-medium">
              Top-tier products with regular updates, premium support, and cutting-edge features for the best gaming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: CheckCircle2, title: "Verified Products", desc: "All products tested and verified" },
            { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
            { icon: Lock, title: "Secure Payments", desc: "Encrypted transactions" },
            { icon: TrendingUp, title: "Regular Updates", desc: "Products updated regularly" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] border-2 border-[rgba(255,255,255,0.15)] hover:border-[#00eaff] hover:shadow-[0_0_30px_rgba(0,234,255,0.4)] transition-all duration-500 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] flex items-center justify-center mb-4 sm:mb-5">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00eaff]" />
              </div>
              <h4 className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-xs sm:text-sm text-[#a9b0ff] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center p-8 sm:p-12 md:p-16 lg:p-20 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[rgba(0,234,255,0.15)] via-[rgba(138,61,255,0.15)] to-[rgba(255,79,216,0.15)] border-2 border-[rgba(0,234,255,0.3)] backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        <div className="relative z-10">
          <Award className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 md:mb-8 text-[#00eaff]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 md:mb-6 text-white leading-tight">
            {t("home.ready")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#a9b0ff] mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
            Browse our premium products and find the perfect solution for your gaming needs.
          </p>
          <Button
            asChild
            className="rounded-lg sm:rounded-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:via-[#8a3dff] hover:to-[#00eaff] shadow-[0_0_30px_rgba(138,61,255,0.4)] hover:shadow-[0_0_50px_rgba(138,61,255,0.6)] transition-all duration-300"
          >
            <Link to="/products" className="flex items-center gap-3 sm:gap-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
              <span>{t("home.explore")}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
