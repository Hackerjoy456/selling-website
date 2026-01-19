import { Link } from "react-router-dom";
import { Send, MessageCircle, Youtube } from "lucide-react";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { TrustBadges } from "@/components/TrustBadges";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative mt-20 pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

      {/* Animated Beam Divider */}
      <div className="absolute top-0 left-0 right-0 h-px w-full overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-beam w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h5 className="font-heading font-black text-3xl mb-12 bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent inline-block">
            {t("footer.connect")}
          </h5>

          <div className="flex justify-center gap-6 mb-16">
            {/* Telegram */}
            <a
              href="https://t.me/hibigibi123"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#2AABEE] hover:border-[#2AABEE] shadow-lg hover:shadow-[#2AABEE]/50"
              aria-label="Telegram"
            >
              <Send className="w-8 h-8 text-[#2AABEE] group-hover:text-white transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801629933030"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#25D366] hover:border-[#25D366] shadow-lg hover:shadow-[#25D366]/50"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors" />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/vsAavHVEe2"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#5865F2] hover:border-[#5865F2] shadow-lg hover:shadow-[#5865F2]/50"
              aria-label="Discord"
            >
              <DiscordIcon className="w-8 h-8 text-[#5865F2] group-hover:text-white transition-colors" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@cloudengineff"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:bg-[#FF0000] hover:border-[#FF0000] shadow-lg hover:shadow-[#FF0000]/50"
              aria-label="YouTube"
            >
              <Youtube className="w-8 h-8 text-[#FF0000] group-hover:text-white transition-colors" />
            </a>
          </div>

          <TrustBadges />

          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <Link to="/privacy" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/refund" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                {t("footer.refund")}
              </Link>
              <Link to="/terms" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-400 font-medium">
                {t("footer.copyright")}
              </p>
              <p className="text-sm text-gray-600">
                {t("footer.tagline")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
