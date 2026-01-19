import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShoppingBasket, ArrowRight, Heart, Eye } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductQuickView } from "@/components/ProductQuickView";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const lowestPrice = product.prices[0];
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { t } = useLanguage();
  const inWishlist = isInWishlist(product.id);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const getStockStatus = () => {
    if (product.stockStatus === "out_of_stock") return { text: t("stock.outOfStock"), color: "red", bg: "rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.4)" };
    if (product.stockStatus === "low_stock") return { text: t("stock.lowStock"), color: "yellow", bg: "rgba(234,179,8,0.2)", border: "rgba(234,179,8,0.4)" };
    return { text: t("stock.inStock"), color: "green", bg: "rgba(34,197,94,0.2)", border: "rgba(34,197,94,0.4)" };
  };

  const stockInfo = getStockStatus();

  return (
    <>
      <Card
        className="h-full flex flex-col group cursor-pointer overflow-hidden relative transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(138,61,255,0.3)] border border-[rgba(255,255,255,0.08)] bg-[#0d1020]/80 backdrop-blur-sm"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Link to={`/products/${product.id}`} className="absolute inset-0 z-0" aria-label={`View details for ${product.name}`} />
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,234,255,0.03)] via-transparent to-[rgba(138,61,255,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Product Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1020] via-transparent to-transparent opacity-80" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className="absolute top-3 right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#ff4fd8]/20 hover:border-[#ff4fd8] transition-all duration-300 group/wishlist"
          >
            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${inWishlist ? 'text-[#ff4fd8] fill-[#ff4fd8]' : 'text-white group-hover/wishlist:text-[#ff4fd8]'}`} />
          </button>

          {/* Stock Status Badge */}
          <div className="absolute top-3 left-3 z-30">
            <div className={`px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md border flex items-center gap-1.5`} style={{ background: stockInfo.bg, borderColor: stockInfo.border }}>
              <span className={`w-1.5 h-1.5 rounded-full ${stockInfo.color === "green" ? "bg-green-400 animate-pulse" : stockInfo.color === "yellow" ? "bg-yellow-400" : "bg-red-400"}`}></span>
              <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">{stockInfo.text}</span>
            </div>
          </div>

          {/* Quick View Button - Shows on Hover */}
          <div className={`absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQuickView(true);
              }}
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0"
            >
              <Eye className="w-4 h-4" />
              {t("productCard.quickView")}
            </button>
          </div>
        </div>

        <CardHeader className="pb-2 sm:pb-3 relative z-10 px-4 sm:px-5 pt-4">
          <div className="flex justify-between items-start gap-2">
            <CardTitle className="text-base sm:text-lg leading-tight mb-1 text-white group-hover:text-[#00eaff] transition-colors duration-300 font-bold line-clamp-1">
              {product.name}
            </CardTitle>
          </div>
          <CardDescription className="text-[11px] sm:text-xs font-medium text-[#a9b0ff] line-clamp-1">{product.subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col pt-0 relative z-10 px-4 sm:px-5 pb-4 sm:pb-5">
          {/* Features Preview */}
          {product.features && product.features.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1.5">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-[#a9b0ff] bg-white/5"
                  >
                    {feature}
                  </span>
                ))}
                {product.features.length > 2 && (
                  <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-[#a9b0ff] bg-white/5">
                    +{product.features.length - 2}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Price Display */}
          <div className="mt-auto pt-3 border-t border-white/5">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[10px] text-[#a9b0ff] mb-0.5">{t("common.startingFrom")}</p>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-white">₹{lowestPrice?.inr || 0}</span>
                  {lowestPrice?.bdt && (
                    <span className="text-sm font-bold text-[#00eaff]">{lowestPrice.bdt} BDT</span>
                  )}
                </div>
              </div>

              {lowestPrice?.usdt && (
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#00eaff]/10 border border-[#00eaff]/20">
                  <ShoppingBasket className="w-3 h-3 text-[#00eaff]" />
                  <span className="text-[10px] font-bold text-[#00eaff]">{lowestPrice.usdt} USDT</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to={`/products/${product.id}`}
            className="w-full mt-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,61,255,0.4)] hover:opacity-90 relative overflow-hidden group/btn border-0 flex items-center justify-center gap-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <span>{t("products.viewDetails")}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </CardContent>
      </Card>

      <ProductQuickView
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
        onViewDetails={() => {
          setShowQuickView(false);
          onProductClick(product);
        }}
      />
    </>
  );
}

