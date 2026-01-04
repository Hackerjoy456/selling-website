import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "bn" | "hi" | "ar" | "es" | "fr" | "de" | "ja" | "ko" | "pt" | "ru" | "zh" | "it" | "tr" | "vi" | "th" | "id" | "nl" | "pl" | "uk";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.payment": "Payment",
    "nav.wishlist": "Wishlist",
    "nav.cart": "Cart",
    // Home
    "home.title": "RANDOM CHEAT SELLING",
    "home.subtitle": "Premium Gaming Solutions",
    "home.tagline": "Your Trusted Partner for Premium Gaming",
    "home.description": "Experience the ultimate gaming advantage with our premium collection of verified cheats and mods. Quality products, competitive pricing, and 24/7 dedicated support.",
    "home.explore": "Explore Products",
    "home.contact": "Contact Us",
    "home.whyChoose": "Why Choose Us",
    "home.trusted": "Trusted & Secure",
    "home.instant": "Instant Delivery",
    "home.premium": "Premium Quality",
    "home.ready": "Ready to Get Started?",
    // Products
    "products.title": "Our Products",
    "products.search": "Search products...",
    "products.all": "All Products",
    "products.viewDetails": "View Details",
    // Payment
    "payment.title": "Payment Methods",
    "payment.bd": "Bangladesh Payment",
    "payment.india": "India Payment",
    "payment.international": "International Payment",
    "payment.warning": "Important: Send money to these numbers only. This is a personal account. Do NOT call anyone.",
    "payment.copy": "Copy",
    "payment.copied": "Copied!",
    "payment.instructions": "Important Payment Instructions",
    "payment.step1": "Complete the payment using any of the methods above. Make sure to send the exact amount as specified.",
    "payment.step2": "Take a screenshot of your payment confirmation or transaction receipt.",
    "payment.step3": "Click the button below to contact us via WhatsApp and send the screenshot along with the exact payment amount.",
    "payment.step4": "Our team will verify your payment and provide your product access within 24 hours.",
    "payment.sendScreenshot": "Send Payment Screenshot via WhatsApp",
    // Footer
    "footer.connect": "CONNECT WITH US",
    "footer.copyright": "© 2025 RANDOM CHEAT SELLING | All Rights Reserved",
    "footer.tagline": "Premium Gaming Solutions • Trusted Reseller • 24/7 Support",
    // Common
    "common.addToCart": "Add to Cart",
    "common.contactToBuy": "Contact to Buy",
    "common.inStock": "In Stock",
    "common.selectDuration": "Select Duration",
    "common.selectedPlan": "Selected Plan",
    "common.startingFrom": "Starting from",
  },
  bn: {
    "nav.home": "হোম",
    "nav.products": "পণ্য",
    "nav.about": "সম্পর্কে",
    "nav.contact": "যোগাযোগ",
    "nav.faq": "প্রশ্নোত্তর",
    "nav.payment": "পেমেন্ট",
    "nav.wishlist": "ইচ্ছা তালিকা",
    "nav.cart": "কার্ট",
    "home.title": "র‍্যান্ডম চিট বিক্রয়",
    "home.subtitle": "প্রিমিয়াম গেমিং সমাধান",
    "home.tagline": "প্রিমিয়াম গেমিংয়ের জন্য আপনার বিশ্বস্ত অংশীদার",
    "home.description": "যাচাইকৃত চিট এবং মডের আমাদের প্রিমিয়াম সংগ্রহ দিয়ে চূড়ান্ত গেমিং সুবিধা অনুভব করুন। মানসম্মত পণ্য, প্রতিযোগিতামূলক মূল্য এবং 24/7 নিবেদিত সহায়তা।",
    "home.explore": "পণ্য অন্বেষণ করুন",
    "home.contact": "যোগাযোগ করুন",
    "home.whyChoose": "কেন আমাদের বেছে নিন",
    "home.trusted": "বিশ্বস্ত এবং নিরাপদ",
    "home.instant": "তাত্ক্ষণিক ডেলিভারি",
    "home.premium": "প্রিমিয়াম মান",
    "home.ready": "শুরু করতে প্রস্তুত?",
    "products.title": "আমাদের পণ্য",
    "products.search": "পণ্য খুঁজুন...",
    "products.all": "সব পণ্য",
    "products.viewDetails": "বিস্তারিত দেখুন",
    "payment.title": "পেমেন্ট পদ্ধতি",
    "payment.bd": "বাংলাদেশ পেমেন্ট",
    "payment.india": "ভারত পেমেন্ট",
    "payment.international": "আন্তর্জাতিক পেমেন্ট",
    "payment.warning": "গুরুত্বপূর্ণ: শুধুমাত্র এই নম্বরগুলিতে টাকা পাঠান। এটি একটি ব্যক্তিগত অ্যাকাউন্ট। কারও সাথে কল করবেন না।",
    "payment.copy": "কপি করুন",
    "payment.copied": "কপি হয়েছে!",
    "payment.instructions": "গুরুত্বপূর্ণ পেমেন্ট নির্দেশাবলী",
    "payment.step1": "উপরের যেকোনো পদ্ধতি ব্যবহার করে পেমেন্ট সম্পন্ন করুন। নির্দিষ্ট পরিমাণ ঠিক পাঠাতে ভুলবেন না।",
    "payment.step2": "আপনার পেমেন্ট নিশ্চিতকরণ বা লেনদেনের রসিদের একটি স্ক্রিনশট নিন।",
    "payment.step3": "WhatsApp এর মাধ্যমে আমাদের সাথে যোগাযোগ করতে এবং সঠিক পেমেন্ট পরিমাণ সহ স্ক্রিনশট পাঠাতে নীচের বোতামে ক্লিক করুন।",
    "payment.step4": "আমাদের দল আপনার পেমেন্ট যাচাই করবে এবং 24 ঘন্টার মধ্যে আপনার পণ্যের অ্যাক্সেস প্রদান করবে।",
    "payment.sendScreenshot": "WhatsApp এর মাধ্যমে পেমেন্ট স্ক্রিনশট পাঠান",
    "footer.connect": "আমাদের সাথে সংযুক্ত হন",
    "footer.copyright": "© 2025 র‍্যান্ডম চিট বিক্রয় | সর্বস্বত্ব সংরক্ষিত",
    "footer.tagline": "প্রিমিয়াম গেমিং সমাধান • বিশ্বস্ত বিক্রেতা • 24/7 সহায়তা",
    "common.addToCart": "কার্টে যোগ করুন",
    "common.contactToBuy": "ক্রয় করতে যোগাযোগ করুন",
    "common.inStock": "স্টকে আছে",
    "common.selectDuration": "সময়কাল নির্বাচন করুন",
    "common.selectedPlan": "নির্বাচিত পরিকল্পনা",
    "common.startingFrom": "শুরু থেকে",
  },
  hi: {
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "के बारे में",
    "nav.contact": "संपर्क",
    "nav.faq": "सवाल-जवाब",
    "nav.payment": "भुगतान",
    "nav.wishlist": "इच्छा सूची",
    "nav.cart": "कार्ट",
    "home.title": "रैंडम चीट सेलिंग",
    "home.subtitle": "प्रीमियम गेमिंग समाधान",
    "home.tagline": "प्रीमियम गेमिंग के लिए आपका विश्वसनीय साथी",
    "home.description": "सत्यापित चीट और मॉड्स के हमारे प्रीमियम संग्रह के साथ अंतिम गेमिंग लाभ का अनुभव करें। गुणवत्तापूर्ण उत्पाद, प्रतिस्पर्धी मूल्य और 24/7 समर्पित समर्थन।",
    "home.explore": "उत्पाद देखें",
    "home.contact": "संपर्क करें",
    "home.whyChoose": "हमें क्यों चुनें",
    "home.trusted": "विश्वसनीय और सुरक्षित",
    "home.instant": "तत्काल डिलीवरी",
    "home.premium": "प्रीमियम गुणवत्ता",
    "home.ready": "शुरू करने के लिए तैयार?",
    "products.title": "हमारे उत्पाद",
    "products.search": "उत्पाद खोजें...",
    "products.all": "सभी उत्पाद",
    "products.viewDetails": "विवरण देखें",
    "payment.title": "भुगतान विधियाँ",
    "payment.bd": "बांग्लादेश भुगतान",
    "payment.india": "भारत भुगतान",
    "payment.international": "अंतर्राष्ट्रीय भुगतान",
    "payment.warning": "महत्वपूर्ण: केवल इन नंबरों पर पैसा भेजें। यह एक व्यक्तिगत खाता है। किसी को कॉल न करें।",
    "payment.copy": "कॉपी करें",
    "payment.copied": "कॉपी हो गया!",
    "payment.instructions": "महत्वपूर्ण भुगतान निर्देश",
    "payment.step1": "ऊपर दी गई किसी भी विधि का उपयोग करके भुगतान पूरा करें। निर्दिष्ट सटीक राशि भेजना सुनिश्चित करें।",
    "payment.step2": "अपनी भुगतान पुष्टि या लेनदेन रसीद का स्क्रीनशॉट लें।",
    "payment.step3": "WhatsApp के माध्यम से हमसे संपर्क करने और सटीक भुगतान राशि के साथ स्क्रीनशॉट भेजने के लिए नीचे दिए गए बटन पर क्लिक करें।",
    "payment.step4": "हमारी टीम आपके भुगतान को सत्यापित करेगी और 24 घंटों के भीतर आपकी उत्पाद पहुंच प्रदान करेगी।",
    "payment.sendScreenshot": "WhatsApp के माध्यम से भुगतान स्क्रीनशॉट भेजें",
    "footer.connect": "हमसे जुड़ें",
    "footer.copyright": "© 2025 रैंडम चीट सेलिंग | सभी अधिकार सुरक्षित",
    "footer.tagline": "प्रीमियम गेमिंग समाधान • विश्वसनीय विक्रेता • 24/7 समर्थन",
    "common.addToCart": "कार्ट में जोड़ें",
    "common.contactToBuy": "खरीदने के लिए संपर्क करें",
    "common.inStock": "स्टॉक में",
    "common.selectDuration": "अवधि चुनें",
    "common.selectedPlan": "चयनित योजना",
    "common.startingFrom": "शुरुआत से",
  },
  ar: { "nav.home": "الرئيسية", "nav.products": "المنتجات", "nav.about": "حول", "nav.contact": "اتصل", "nav.faq": "الأسئلة الشائعة", "nav.payment": "الدفع", "nav.wishlist": "قائمة الأمنيات", "nav.cart": "السلة" },
  es: { "nav.home": "Inicio", "nav.products": "Productos", "nav.about": "Acerca de", "nav.contact": "Contacto", "nav.faq": "Preguntas", "nav.payment": "Pago", "nav.wishlist": "Lista de deseos", "nav.cart": "Carrito" },
  fr: { "nav.home": "Accueil", "nav.products": "Produits", "nav.about": "À propos", "nav.contact": "Contact", "nav.faq": "FAQ", "nav.payment": "Paiement", "nav.wishlist": "Liste de souhaits", "nav.cart": "Panier" },
  de: { "nav.home": "Startseite", "nav.products": "Produkte", "nav.about": "Über uns", "nav.contact": "Kontakt", "nav.faq": "FAQ", "nav.payment": "Zahlung", "nav.wishlist": "Wunschliste", "nav.cart": "Warenkorb" },
  ja: { "nav.home": "ホーム", "nav.products": "製品", "nav.about": "について", "nav.contact": "お問い合わせ", "nav.faq": "よくある質問", "nav.payment": "支払い", "nav.wishlist": "ウィッシュリスト", "nav.cart": "カート" },
  ko: { "nav.home": "홈", "nav.products": "제품", "nav.about": "소개", "nav.contact": "연락처", "nav.faq": "자주 묻는 질문", "nav.payment": "결제", "nav.wishlist": "위시리스트", "nav.cart": "장바구니" },
  pt: { "nav.home": "Início", "nav.products": "Produtos", "nav.about": "Sobre", "nav.contact": "Contato", "nav.faq": "Perguntas", "nav.payment": "Pagamento", "nav.wishlist": "Lista de desejos", "nav.cart": "Carrinho" },
  ru: { "nav.home": "Главная", "nav.products": "Продукты", "nav.about": "О нас", "nav.contact": "Контакты", "nav.faq": "Вопросы", "nav.payment": "Оплата", "nav.wishlist": "Список желаний", "nav.cart": "Корзина" },
  zh: { "nav.home": "首页", "nav.products": "产品", "nav.about": "关于", "nav.contact": "联系", "nav.faq": "常见问题", "nav.payment": "支付", "nav.wishlist": "愿望清单", "nav.cart": "购物车" },
  it: { "nav.home": "Home", "nav.products": "Prodotti", "nav.about": "Chi siamo", "nav.contact": "Contatti", "nav.faq": "FAQ", "nav.payment": "Pagamento", "nav.wishlist": "Lista desideri", "nav.cart": "Carrello" },
  tr: { "nav.home": "Ana Sayfa", "nav.products": "Ürünler", "nav.about": "Hakkında", "nav.contact": "İletişim", "nav.faq": "SSS", "nav.payment": "Ödeme", "nav.wishlist": "İstek Listesi", "nav.cart": "Sepet" },
  vi: { "nav.home": "Trang chủ", "nav.products": "Sản phẩm", "nav.about": "Giới thiệu", "nav.contact": "Liên hệ", "nav.faq": "Câu hỏi", "nav.payment": "Thanh toán", "nav.wishlist": "Danh sách yêu thích", "nav.cart": "Giỏ hàng" },
  th: { "nav.home": "หน้าแรก", "nav.products": "ผลิตภัณฑ์", "nav.about": "เกี่ยวกับ", "nav.contact": "ติดต่อ", "nav.faq": "คำถามที่พบบ่อย", "nav.payment": "การชำระเงิน", "nav.wishlist": "รายการที่ต้องการ", "nav.cart": "ตะกร้า" },
  id: { "nav.home": "Beranda", "nav.products": "Produk", "nav.about": "Tentang", "nav.contact": "Kontak", "nav.faq": "FAQ", "nav.payment": "Pembayaran", "nav.wishlist": "Daftar Keinginan", "nav.cart": "Keranjang" },
  nl: { "nav.home": "Home", "nav.products": "Producten", "nav.about": "Over ons", "nav.contact": "Contact", "nav.faq": "FAQ", "nav.payment": "Betaling", "nav.wishlist": "Verlanglijst", "nav.cart": "Winkelwagen" },
  pl: { "nav.home": "Strona główna", "nav.products": "Produkty", "nav.about": "O nas", "nav.contact": "Kontakt", "nav.faq": "FAQ", "nav.payment": "Płatność", "nav.wishlist": "Lista życzeń", "nav.cart": "Koszyk" },
  uk: { "nav.home": "Головна", "nav.products": "Продукти", "nav.about": "Про нас", "nav.contact": "Контакти", "nav.faq": "Питання", "nav.payment": "Оплата", "nav.wishlist": "Список бажань", "nav.cart": "Кошик" },
};

const languageNames: Record<Language, string> = {
  en: "English",
  bn: "বাংলা",
  hi: "हिन्दी",
  ar: "العربية",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  pt: "Português",
  ru: "Русский",
  zh: "中文",
  it: "Italiano",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  th: "ไทย",
  id: "Bahasa Indonesia",
  nl: "Nederlands",
  pl: "Polski",
  uk: "Українська",
};

function detectLanguage(): Language {
  // Check localStorage first
  const stored = localStorage.getItem("preferred-language") as Language;
  if (stored && translations[stored]) return stored;

  // Detect from browser
  const browserLang = navigator.language.split("-")[0] as Language;
  if (translations[browserLang]) return browserLang;

  // Default to English
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  useEffect(() => {
    const stored = localStorage.getItem("preferred-language") as Language;
    if (stored && translations[stored]) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred-language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export { languageNames, type Language };

