import { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductRecommendationsProps {
  currentProduct: Product;
  allProducts: Product[];
  onProductClick: (product: Product) => void;
}

export function ProductRecommendations({ currentProduct, allProducts, onProductClick }: ProductRecommendationsProps) {
  const { t } = useLanguage();

  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-black text-white">
          {t("recommendations.title")}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
}

