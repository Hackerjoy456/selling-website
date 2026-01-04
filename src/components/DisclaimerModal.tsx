import { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="max-w-md w-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0d1020] to-[#050713] border-2 border-[rgba(255,193,7,0.5)] shadow-[0_0_50px_rgba(255,193,7,0.3)] relative animate-fadeInUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] flex items-center justify-center transition-colors group"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Warning Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[rgba(255,193,7,0.3)] to-[rgba(255,152,0,0.3)] border-2 border-[rgba(255,193,7,0.5)] flex items-center justify-center animate-pulse">
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6 text-center">
          {t("disclaimer.title")}
        </h2>

        {/* Warning Message */}
        <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[rgba(255,193,7,0.15)] to-[rgba(255,152,0,0.15)] border-2 border-[rgba(255,193,7,0.3)]">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed text-center">
              {t("disclaimer.message1")}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[rgba(255,193,7,0.15)] to-[rgba(255,152,0,0.15)] border-2 border-[rgba(255,193,7,0.3)]">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed text-center">
              {t("disclaimer.message2")}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[rgba(255,193,7,0.15)] to-[rgba(255,152,0,0.15)] border-2 border-[rgba(255,193,7,0.3)]">
            <p className="text-sm sm:text-base text-white font-semibold leading-relaxed text-center">
              {t("disclaimer.message3")}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[rgba(239,68,68,0.15)] to-[rgba(220,38,38,0.15)] border-2 border-[rgba(239,68,68,0.3)]">
            <p className="text-sm sm:text-base text-white font-bold leading-relaxed text-center">
              {t("disclaimer.message4")}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6 sm:mb-8 p-4 rounded-xl bg-[rgba(0,234,255,0.1)] border-2 border-[rgba(0,234,255,0.3)]">
          <p className="text-xs sm:text-sm text-[#a9b0ff] text-center font-medium mb-2">
            {t("disclaimer.contactLabel")}
          </p>
          <p className="text-sm sm:text-base text-[#00eaff] text-center font-black">
            WhatsApp: +8801629933030
          </p>
        </div>

        {/* Accept Button */}
        <Button
          onClick={handleClose}
          className="w-full rounded-xl sm:rounded-2xl py-4 sm:py-6 text-base sm:text-lg font-black bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] hover:from-[#ff4fd8] hover:via-[#8a3dff] hover:to-[#00eaff] shadow-[0_0_40px_rgba(138,61,255,0.6)] hover:shadow-[0_0_60px_rgba(138,61,255,0.8)] transition-all duration-500"
        >
          {t("disclaimer.understand")}
        </Button>
      </div>
    </div>
  );
}

