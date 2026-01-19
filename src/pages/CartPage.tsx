import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { CouponInput } from "@/components/CouponInput";
import { useLanguage } from "@/contexts/LanguageContext";

export function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { t } = useLanguage();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const total = getTotalPrice();
  const discountedTotal = discount > 0 ? {
    inr: Math.round(total.inr * (1 - discount / 100)),
    bdt: Math.round(total.bdt * (1 - discount / 100)),
    usdt: total.usdt > 0 ? Math.round(total.usdt * (1 - discount / 100) * 100) / 100 : 0
  } : total;

  const handleApplyCoupon = (code: string) => {
    if (!code) {
      setAppliedCoupon(null);
      setDiscount(0);
      return;
    }

    // Example coupon codes - you can expand this
    const coupons: Record<string, number> = {
      "WELCOME10": 10,
      "SAVE20": 20,
      "PREMIUM15": 15,
      "FIRST5": 5,
    };

    if (coupons[code]) {
      setAppliedCoupon(code);
      setDiscount(coupons[code]);
    } else {
      setAppliedCoupon(null);
      setDiscount(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center animate-fadeIn">
        <div className="text-center max-w-md bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_30px_rgba(0,234,255,0.3)]">
            <ShoppingBag className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-black mb-3 text-white">
            {t("cart.emptyTitle")}
          </h2>
          <p className="text-gray-400 mb-8 font-medium">
            {t("cart.emptyText")}
          </p>
          <Button
            asChild
            className="w-full rounded-xl py-6 text-base font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-primary/30 transition-all duration-500"
          >
            <Link to="/products" className="flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5 rotate-180" />
              {t("cart.continue")}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn">
      <div className="mb-12 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        <h1 className="text-4xl sm:text-5xl font-black mb-4 text-white tracking-tight">
          {t("cart.title")}
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20">
          <ShoppingBag className="w-4 h-4 text-primary" />
          <span className="text-primary font-bold">{items.length} {items.length === 1 ? t("wishlist.item") : t("wishlist.items")} {t("cart.inCart")}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <div
              key={`${item.product.id}-${item.priceOption.duration}-${index}`}
              className="glass-card p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 relative overflow-hidden rounded-2xl w-full md:w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-2">{item.product.name}</h3>
                        <p className="text-sm text-gray-400 font-medium mb-3">{item.product.subtitle}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.priceOption.duration)}
                        className="p-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="inline-flex px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.priceOption.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">{t("cart.qty")}</span>
                      <div className="flex items-center gap-2 bg-black/20 rounded-xl p-1 border border-white/5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.priceOption.duration, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.priceOption.duration, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-black text-white">
                        ₹{item.priceOption.inr * item.quantity}
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {item.priceOption.bdt * item.quantity} BDT
                        {item.priceOption.usdt && ` • ${item.priceOption.usdt * item.quantity} USDT`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Button
            onClick={clearCart}
            variant="outline"
            className="w-full md:w-auto rounded-xl px-8 py-6 text-sm font-bold border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 hover:border-red-500/50 transition-all uppercase tracking-wider"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            {t("cart.clear")}
          </Button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-8 rounded-[2rem] border border-primary/20 sticky top-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" />
              {t("cart.orderSummary")}
            </h2>

            {/* Coupon Input */}
            <div className="mb-8">
              <CouponInput
                onApplyCoupon={handleApplyCoupon}
                appliedCoupon={appliedCoupon}
                discount={discount}
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400 font-medium text-sm">
                <span>{t("cart.subtotal")} ({items.reduce((sum, item) => sum + item.quantity, 0)} {t("wishlist.items")})</span>
                <span className="text-white font-bold">₹{total.inr}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400 font-medium text-sm">
                  <span>{t("cart.discount")} ({discount}%)</span>
                  <span className="font-bold">-₹{total.inr - discountedTotal.inr}</span>
                </div>
              )}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>
              <div className="flex justify-between items-end">
                <span className="text-lg font-black text-white uppercase tracking-wider">{t("cart.total")}</span>
                <div className="text-right">
                  <div className="text-3xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ₹{discountedTotal.inr}
                  </div>
                  <div className="text-xs text-gray-500 font-bold mt-1">
                    {discountedTotal.bdt} BDT
                    {discountedTotal.usdt > 0 && ` • ${discountedTotal.usdt} USDT`}
                  </div>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="w-full rounded-xl py-7 text-lg font-black bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 mb-4 transform hover:-translate-y-1"
            >
              <a
                href={`https://wa.me/8801629933030?text=${encodeURIComponent(
                  `Order Summary:\n${items.map(item => `${item.product.name} (${item.priceOption.duration}) x${item.quantity} - ₹${item.priceOption.inr * item.quantity}`).join('\n')}\n\nTotal: ₹${total.inr} (${total.bdt} BDT${total.usdt > 0 ? `, ${total.usdt} USDT` : ''})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <div className="p-1 rounded-full bg-white/20">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span>{t("cart.checkout")}</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full rounded-xl py-6 text-sm font-bold border-white/10 text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20"
            >
              <Link to="/products" className="flex items-center justify-center gap-2">
                <ArrowRight className="w-4 h-4 rotate-180" />
                {t("cart.continue")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
