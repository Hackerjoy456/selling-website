import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageSquare, Menu, X, Sparkles, ShoppingCart, Heart, Info, HelpCircle, Mail, CreditCard } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { t } = useLanguage();
  const cartCount = getItemCount();
  const wishlistCount = wishlistItems.length;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,7,19,0.95)] backdrop-blur-2xl border-b-2 border-[rgba(0,234,255,0.2)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-[80px] sm:h-[90px]">
          {/* Enhanced Logo Section - Responsive */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 font-bold text-white no-underline group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff] to-[#8a3dff] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/assets/logo.svg"
                alt="RANDOM CHEAT SELLING"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10 border-2 border-[rgba(0,234,255,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl md:text-2xl font-black bg-gradient-to-r from-white via-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
                RANDOM CHEAT SELLING
              </span>
              <span className="text-[8px] sm:text-[10px] text-[#a9b0ff] font-semibold uppercase tracking-widest hidden sm:block">
                Premium Gaming Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden xl:flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 relative group ${
                isActive("/")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff] shadow-[0_0_20px_rgba(0,234,255,0.4)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent hover:border-[rgba(0,234,255,0.3)]"
              }`}
            >
              <span className="relative z-10">{t("nav.home")}</span>
            </Link>
            <Link
              to="/products"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 relative group ${
                isActive("/products")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff] shadow-[0_0_20px_rgba(0,234,255,0.4)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent hover:border-[rgba(0,234,255,0.3)]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3 h-3 xl:w-4 xl:h-4" />
                {t("nav.products")}
              </span>
            </Link>
            <Link
              to="/about"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 ${
                isActive("/about")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent"
              }`}
            >
              <Info className="w-3 h-3 xl:w-4 xl:h-4 inline mr-1" />
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 ${
                isActive("/contact")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent"
              }`}
            >
              <Mail className="w-3 h-3 xl:w-4 xl:h-4 inline mr-1" />
              {t("nav.contact")}
            </Link>
            <Link
              to="/faq"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 ${
                isActive("/faq")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent"
              }`}
            >
              <HelpCircle className="w-3 h-3 xl:w-4 xl:h-4 inline mr-1" />
              {t("nav.faq")}
            </Link>
            <Link
              to="/payment"
              className={`px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold text-xs xl:text-sm transition-all duration-300 ${
                isActive("/payment")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] border-2 border-transparent"
              }`}
            >
              <CreditCard className="w-3 h-3 xl:w-4 xl:h-4 inline mr-1" />
              {t("nav.payment")}
            </Link>
            <div className="w-px h-8 bg-[rgba(255,255,255,0.1)] mx-2"></div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative px-3 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
            >
              <ShoppingCart className="w-5 h-5 text-[#a9b0ff] group-hover:text-[#00eaff] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-xs font-black flex items-center justify-center border-2 border-[#0d1020]">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            
            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative px-3 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
            >
              <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : 'text-[#a9b0ff] group-hover:text-[#ff4fd8]'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-xs font-black flex items-center justify-center border-2 border-[#0d1020]">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>
            
            <Button
              asChild
              variant="default"
              className="rounded-xl px-4 xl:px-6 py-2 xl:py-3 bg-gradient-to-r from-[#25D366] via-[#00eaff] to-[#25D366] text-white font-black text-xs xl:text-sm shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 border-0"
            >
              <a
                href="https://wa.me/8801629933030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4" />
                <span className="hidden 2xl:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              to="/cart"
              className="relative p-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-[#a9b0ff]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-xs font-black flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-white p-2 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="xl:hidden pb-6 pt-4 space-y-3 border-t-2 border-[rgba(0,234,255,0.2)] mt-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/products") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/about") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/contact") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t("nav.contact")}
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/faq") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t("nav.faq")}
            </Link>
            <Link
              to="/payment"
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive("/payment") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t("nav.payment")}
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 rounded-xl font-bold text-sm text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.08)] flex items-center gap-2"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : ''}`} />
              {t("nav.wishlist")} {wishlistCount > 0 && `(${wishlistCount})`}
            </Link>
            <div className="pt-3 space-y-3">
              <Button
                asChild
                variant="default"
                className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#00eaff] text-white font-black"
              >
                <a
                  href="https://wa.me/8801629933030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="default"
                className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-[#5865F2] to-[#8a3dff] text-white font-black"
              >
                <a
                  href="https://discord.gg/vsAavHVEe2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discord
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
