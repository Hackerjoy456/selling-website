import { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ArrowRight, Heart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onProductClick }: ProductCardProps) {
  const lowestPrice = product.prices[0];
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { t } = useLanguage();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Card 
      className="h-full flex flex-col group cursor-pointer overflow-hidden relative transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(138,61,255,0.4)] border-2 border-[rgba(255,255,255,0.1)]"
      onClick={() => onProductClick(product)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,234,255,0.05)] via-transparent to-[rgba(138,61,255,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0d1020] via-transparent to-transparent opacity-60" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[rgba(0,0,0,0.6)] backdrop-blur-md border-2 border-[rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-[rgba(255,79,216,0.3)] hover:border-[#ff4fd8] transition-all duration-300"
        >
          <Heart className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${inWishlist ? 'text-[#ff4fd8] fill-[#ff4fd8]' : 'text-white group-hover:text-[#ff4fd8]'}`} />
        </button>

        {/* Availability Badge */}
        <div className="absolute bottom-3 left-3 z-20">
          <div className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gradient-to-r from-[rgba(34,197,94,0.3)] to-[rgba(34,197,94,0.2)] backdrop-blur-md border border-[rgba(34,197,94,0.4)]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-black text-white">{t("common.inStock")}</span>
            </div>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3 sm:pb-4 relative z-10">
        <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00eaff] group-hover:to-[#ff4fd8] group-hover:bg-clip-text transition-all duration-300 font-black">
          {product.name}
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm font-bold text-[#a9b0ff]">{product.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col pt-0 relative z-10">
        {/* Features Preview */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 sm:mb-5">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-1 rounded-md bg-gradient-to-r from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] border border-[rgba(0,234,255,0.2)] text-[#00eaff] font-semibold"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price Display */}
        <div className="mt-auto pt-4 sm:pt-5 border-t border-[rgba(255,255,255,0.1)]">
          <div className="flex items-baseline justify-between mb-2 sm:mb-3">
            <span className="text-[10px] sm:text-xs text-[#a9b0ff] font-bold uppercase tracking-wider">{t("common.startingFrom")}</span>
            {lowestPrice?.usdt && (
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[rgba(0,234,255,0.2)]">
                <Sparkles className="w-3 h-3 text-[#00eaff]" />
                <span className="text-[10px] sm:text-xs text-[#00eaff] font-black">{lowestPrice.usdt} USDT</span>
              </div>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">₹{lowestPrice?.inr || 0}</span>
            {lowestPrice?.bdt && (
              <span className="text-xs sm:text-sm text-[#a9b0ff] font-bold">({lowestPrice.bdt} BDT)</span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="w-full mt-4 sm:mt-5 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] text-white font-black text-sm sm:text-base transition-all duration-300 hover:shadow-[0_0_25px_rgba(138,61,255,0.6)] hover:scale-[1.01] relative overflow-hidden group/btn border-0"
          onClick={(e) => {
            e.stopPropagation();
            onProductClick(product);
          }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            <span>{t("products.viewDetails")}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </button>
      </CardContent>
    </Card>
  );
}
