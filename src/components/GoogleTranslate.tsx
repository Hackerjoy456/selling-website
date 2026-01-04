import { useEffect } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (options: any, elementId: string): void;
          InlineLayout?: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    // Load Google Translate script if not already loaded
    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      window.googleTranslateElementInit = function () {
        // Wait a bit to ensure API is fully loaded
        const initTranslate = () => {
          try {
            if (
              window.google &&
              window.google.translate &&
              window.google.translate.TranslateElement
            ) {
              const options: any = {
                pageLanguage: "en",
                includedLanguages:
                  "en,bn,hi,ar,es,fr,de,ja,ko,pt,ru,zh,it,tr,vi,th,id,nl,pl,uk",
                autoDisplay: false,
              };

              // Safely add layout if available
              if (
                window.google.translate.TranslateElement.InlineLayout &&
                window.google.translate.TranslateElement.InlineLayout.SIMPLE
              ) {
                options.layout =
                  window.google.translate.TranslateElement.InlineLayout.SIMPLE;
              }

              new window.google.translate.TranslateElement(
                options,
                "google_translate_element"
              );
            } else {
              // Retry if API not ready
              setTimeout(initTranslate, 100);
            }
          } catch (error) {
            console.warn("Google Translate initialization error:", error);
          }
        };

        // Small delay to ensure API is ready
        setTimeout(initTranslate, 50);
      };

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    } else if (window.google && window.google.translate) {
      // Script already loaded, initialize directly
      try {
        const options: any = {
          pageLanguage: "en",
          includedLanguages:
            "en,bn,hi,ar,es,fr,de,ja,ko,pt,ru,zh,it,tr,vi,th,id,nl,pl,uk",
          autoDisplay: false,
        };

        if (
          window.google.translate.TranslateElement.InlineLayout &&
          window.google.translate.TranslateElement.InlineLayout.SIMPLE
        ) {
          options.layout =
            window.google.translate.TranslateElement.InlineLayout.SIMPLE;
        }

        new window.google.translate.TranslateElement(
          options,
          "google_translate_element"
        );
      } catch (error) {
        console.warn("Google Translate initialization error:", error);
      }
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div
        id="google_translate_element"
        className="rounded-lg overflow-hidden bg-[rgba(5,7,19,0.95)] backdrop-blur-xl border border-[rgba(0,234,255,0.3)] shadow-lg"
      />
    </div>
  );
}

