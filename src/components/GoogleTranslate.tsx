import { useEffect } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: any, elementId: string) => void;
        InlineLayout: {
          SIMPLE: number;
        };
      };
    };
  }
}

export function GoogleTranslate() {
  useEffect(() => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn,hi,ar,es,fr,de,ja,ko,pt,ru,zh,it,tr,vi,th,id,nl,pl,uk",
          layout: (window.google.translate.TranslateElement as any).InlineLayout
            ? (window.google.translate.TranslateElement as any).InlineLayout.SIMPLE
            : (window.google.translate as any).InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
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

