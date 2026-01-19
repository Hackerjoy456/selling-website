import { useWishlist } from "@/contexts/WishlistContext";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useState } from "react";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { useLanguage } from "@/contexts/LanguageContext";

export function WishlistPage() {
  const { t } = useLanguage();
  const { items } = useWishlist();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center animate-fadeIn">
        <div className="text-center max-w-md bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 shadow-[0_0_30px_rgba(255,79,216,0.3)]">
            <Heart className="w-10 h-10 text-accent fill-accent/50" />
          </div>
          <h2 className="text-3xl font-black mb-3 text-white">
            {t("wishlist.emptyTitle")}
          </h2>
          <p className="text-gray-400 mb-8 font-medium">
            {t("wishlist.emptyText")}
          </p>
          <Button
            asChild
            className="w-full rounded-xl py-6 text-base font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg hover:shadow-primary/30 transition-all duration-500"
          >
            <Link to="/products" className="flex items-center justify-center gap-2">
              <ArrowRight className="w-5 h-5 rotate-180" />
              {t("wishlist.browse")}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-20 animate-fadeIn">
        <div className="mb-12 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4 text-white tracking-tight">
            {t("wishlist.title")}
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent/20">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span className="text-accent font-bold">{items.length} {items.length === 1 ? t("wishlist.item") : t("wishlist.items")} {t("wishlist.saved")}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <ProductCard
                product={product}
                onProductClick={handleProductClick}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
