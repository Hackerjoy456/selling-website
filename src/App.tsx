import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { ProductsPage } from "@/pages/ProductsPage";
import { CartPage } from "@/pages/CartPage";
import { WishlistPage } from "@/pages/WishlistPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { FAQPage } from "@/pages/FAQPage";
import { PaymentPage } from "@/pages/PaymentPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { RefundPolicyPage } from "@/pages/RefundPolicyPage";
import { TermsPage } from "@/pages/TermsPage";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { GoogleTranslate } from "@/components/GoogleTranslate";
import { ScrollToTop } from "@/components/ScrollToTop";
import { DisclaimerModal } from "@/components/DisclaimerModal";

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/payment" element={<PaymentPage />} />
                  <Route path="/privacy" element={<PrivacyPolicyPage />} />
                  <Route path="/refund" element={<RefundPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                </Routes>
              </main>
              <Footer />
              <GoogleTranslate />
              <ScrollToTop />
              <DisclaimerModal />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
