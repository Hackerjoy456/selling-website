import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessageSquare, Menu, X, ShoppingBasket, Heart, Info, HelpCircle, Mail, CreditCard, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { t } = useLanguage();
  const cartCount = getItemCount();
  const wishlistCount = wishlistItems.length;

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: t("nav.home"), icon: null },
    { path: "/products", label: t("nav.products"), icon: ShoppingBasket },
    { path: "/about", label: t("nav.about"), icon: Info },
    { path: "/contact", label: t("nav.contact"), icon: Mail },
    { path: "/faq", label: t("nav.faq"), icon: HelpCircle },
    { path: "/payment", label: t("nav.payment"), icon: CreditCard },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0c1025]/90 backdrop-blur-md border-b border-white/5 shadow-2xl py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-500"></div>
              <img
                src="/assets/logo.svg"
                alt="Logo"
                className="w-full h-full relative z-10 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-heading font-black text-white tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">
                RANDOM CHEAT
              </span>
              <span className="text-xs font-bold text-primary tracking-[0.2em] leading-none uppercase">
                Selling
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 group overflow-hidden ${isActive(link.path)
                    ? "text-black bg-primary shadow-[0_0_20px_rgba(0,234,255,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {Icon && (
                    <Icon className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${isActive(link.path) ? "animate-pulse" : ""}`} />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />

            <div className="h-8 w-px bg-white/10 mx-1"></div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors group"
            >
              <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'text-accent fill-accent' : 'text-gray-400 group-hover:text-white'}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-accent text-[10px] font-bold text-white flex items-center justify-center shadow-lg transform scale-100 transition-transform group-hover:scale-110">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-full hover:bg-white/5 transition-colors group"
            >
              <ShoppingBasket className={`w-5 h-5 transition-colors ${cartCount > 0 ? 'text-primary' : 'text-gray-400 group-hover:text-white'}`} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary text-[10px] font-bold text-black flex items-center justify-center shadow-lg transform scale-100 transition-transform group-hover:scale-110">
                  {cartCount}
                </span>
              )}
            </Link>

            <Button
              asChild
              className="ml-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold border-0 shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
            >
              <a
                href="https://wa.me/8801629933030"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <Link to="/cart" className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <ShoppingBasket className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary text-[10px] font-bold text-black flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xl z-40 lg:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-[#0c1025] border-l border-white/10 shadow-2xl p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justifyContent-between mb-8">
              <span className="text-xl font-black text-white">Menu</span>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 rounded-xl font-bold transition-all ${isActive(link.path)
                      ? "bg-primary text-black"
                      : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{link.label}</span>
                    </div>
                    {isActive(link.path) && <ChevronRight className="w-4 h-4" />}
                  </Link>
                );
              })}

              <div className="h-px bg-white/10 my-4"></div>

              <Link
                to="/wishlist"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl font-bold bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5" />
                  <span>{t("nav.wishlist")}</span>
                </div>
                {wishlistCount > 0 && (
                  <span className="bg-accent text-white text-xs px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </div>

            <div className="mt-8 space-y-3">
              <LanguageSwitcher />
              <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl h-12">
                <a href="https://wa.me/8801629933030" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl h-12">
                <a href="https://discord.gg/vsAavHVEe2" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
