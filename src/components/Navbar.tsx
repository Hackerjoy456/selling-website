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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(5,7,19,0.98)] backdrop-blur-xl border-b border-[rgba(0,234,255,0.15)] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Enhanced Logo Section - Responsive */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 font-bold text-white no-underline group flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00eaff] to-[#8a3dff] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <img
                src="/assets/logo.svg"
                alt="RANDOM CHEAT SELLING"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 group-hover:scale-105 relative z-10 border-2 border-[rgba(0,234,255,0.25)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-black bg-gradient-to-r from-white via-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight whitespace-nowrap">
                RANDOM CHEAT
              </span>
              <span className="text-xs sm:text-sm md:text-base font-black bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent leading-tight">
                SELLING
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] text-[#a9b0ff] font-medium uppercase tracking-wider hidden md:block mt-0.5">
                Premium Gaming Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 relative group ${
                isActive("/")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <span className="relative z-10">{t("nav.home")}</span>
            </Link>
            <Link
              to="/products"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 relative group flex items-center gap-1.5 ${
                isActive("/products")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="relative z-10">{t("nav.products")}</span>
            </Link>
            <Link
              to="/about"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${
                isActive("/about")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${
                isActive("/contact")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              {t("nav.contact")}
            </Link>
            <Link
              to="/faq"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${
                isActive("/faq")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {t("nav.faq")}
            </Link>
            <Link
              to="/payment"
              className={`px-3 xl:px-4 py-2 rounded-lg font-semibold text-xs xl:text-sm transition-all duration-200 flex items-center gap-1.5 ${
                isActive("/payment")
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] shadow-[0_0_15px_rgba(0,234,255,0.3)]"
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] border border-transparent"
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              {t("nav.payment")}
            </Link>
            <div className="w-px h-6 bg-[rgba(255,255,255,0.08)] mx-1"></div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 group"
            >
              <ShoppingCart className="w-5 h-5 text-[#a9b0ff] group-hover:text-[#00eaff] transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020] shadow-lg">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            
            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 group"
            >
              <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : 'text-[#a9b0ff] group-hover:text-[#ff4fd8]'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020] shadow-lg">
                  {wishlistCount > 9 ? '9+' : wishlistCount}
                </span>
              )}
            </Link>
            
            <Button
              asChild
              variant="default"
              className="rounded-lg px-3 xl:px-4 py-2 bg-gradient-to-r from-[#25D366] via-[#00eaff] to-[#25D366] text-white font-bold text-xs xl:text-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-200 hover:scale-105 border-0 ml-1"
            >
              <a
                href="https://wa.me/8801629933030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Tablet/Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-[#a9b0ff]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#00eaff] text-white text-[10px] font-black flex items-center justify-center border-2 border-[#0d1020]">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-white p-2 rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-3 space-y-2 border-t border-[rgba(0,234,255,0.15)]">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/products") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              {t("nav.products")}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/about") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <Info className="w-4 h-4" />
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/contact") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <Mail className="w-4 h-4" />
              {t("nav.contact")}
            </Link>
            <Link
              to="/faq"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/faq") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              {t("nav.faq")}
            </Link>
            <Link
              to="/payment"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                isActive("/payment") 
                  ? "text-white bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff]" 
                  : "text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)]"
              }`}
            >
              <CreditCard className="w-4 h-4" />
              {t("nav.payment")}
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-[#a9b0ff] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-[#ff4fd8] fill-[#ff4fd8]' : ''}`} />
              {t("nav.wishlist")} {wishlistCount > 0 && <span className="text-xs">({wishlistCount})</span>}
            </Link>
            <div className="pt-2 space-y-2">
              <Button
                asChild
                variant="default"
                className="w-full rounded-lg px-4 py-2.5 bg-gradient-to-r from-[#25D366] to-[#00eaff] text-white font-bold text-sm"
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
                className="w-full rounded-lg px-4 py-2.5 bg-gradient-to-r from-[#5865F2] to-[#8a3dff] text-white font-bold text-sm"
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
