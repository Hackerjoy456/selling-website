import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage, languageNames, type Language } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: Language[] = [
    "en", "bn", "hi", "ar", "es", "fr", "de", "ja", "ko", "pt", "ru", "zh", "it", "tr", "vi", "th", "id", "nl", "pl", "uk"
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] hover:bg-[rgba(0,234,255,0.1)] transition-all duration-300 text-white font-bold text-xs sm:text-sm"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <span className="sm:hidden uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-[rgba(5,7,19,0.98)] backdrop-blur-2xl border-2 border-[rgba(0,234,255,0.3)] rounded-2xl shadow-2xl z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  language === lang
                    ? "bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff] text-white"
                    : "text-[#a9b0ff] hover:bg-[rgba(255,255,255,0.05)] hover:text-white border-2 border-transparent"
                }`}
              >
                <span className="font-bold text-sm">{languageNames[lang]}</span>
                {language === lang && <Check className="w-4 h-4 text-[#00eaff]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

