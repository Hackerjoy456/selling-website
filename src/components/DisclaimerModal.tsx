import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function DisclaimerModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem("hasSeenDisclaimer");
    if (!hasSeenDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen in localStorage
    localStorage.setItem("hasSeenDisclaimer", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-md w-full bg-[#0a0a0f] border border-primary/30 rounded-2xl shadow-[0_0_50px_rgba(0,234,255,0.15)] overflow-hidden relative animate-scaleIn">
        {/* Top Decorative Beam */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />

        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-pulse-slow">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-white text-center mb-2 tracking-tight">
            {t("disclaimer.title")}
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6 font-medium">
            Please read carefully before proceeding.
          </p>

          <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar mb-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors duration-300">
              <p className="text-sm text-gray-300 leading-relaxed text-center font-medium">
                {t("disclaimer.message1")}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors duration-300">
              <p className="text-sm text-gray-300 leading-relaxed text-center font-medium">
                {t("disclaimer.message2")}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors duration-300">
              <p className="text-sm text-gray-300 leading-relaxed text-center font-medium">
                {t("disclaimer.message3")}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:border-red-500/40 transition-colors duration-300">
              <p className="text-sm text-red-200 leading-relaxed text-center font-bold">
                {t("disclaimer.message4")}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="https://wa.me/8801629933030"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-all duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#25D366]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">Contact Me Directly on WhatsApp</span>
                </div>
                <p className="text-xs text-primary/60 font-mono tracking-wider">+880 1629-933030</p>
              </div>
            </a>
          </div>

          <Button
            onClick={handleClose}
            className="w-full py-6 text-lg font-black bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black shadow-lg shadow-primary/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl"
          >
            {t("disclaimer.understand")}
          </Button>
        </div>
      </div>
    </div>
  );
}

