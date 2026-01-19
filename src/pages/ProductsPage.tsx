import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Product } from "@/types";
import { Search, ShoppingBasket, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProductsPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t("products.all"), icon: ShoppingBasket },
    { id: "mobile", label: "Mobile", icon: Filter },
    { id: "pc", label: "PC", icon: Filter },
    { id: "root", label: "Root", icon: Filter },
    { id: "ios", label: "iOS", icon: Filter },
    { id: "bypass", label: "Bypass", icon: Filter },
    { id: "silentaim", label: "Silent Aim", icon: Filter }
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.features && product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));

    const matchesCategory = selectedCategory === "all" ||
      product.name.toLowerCase().includes(selectedCategory) ||
      product.id.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const handleProductClick = (product: Product) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Premium Collection</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-white">
            {t("products.title")}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover our premium collection of gaming solutions. Each product is carefully selected for quality and performance.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-8">
          <div className="max-w-xl mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors z-10" />
            <Input
              type="text"
              placeholder={t("products.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 pr-6 w-full h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:border-primary/50 focus:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 group ${isActive
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(0,234,255,0.4)] scale-105"
                    : "glass-card text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-primary group-hover:text-white transition-colors'}`} />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeIn"
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
        ) : (
          <div className="text-center py-32">
            <div className="inline-block p-12 rounded-3xl glass-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-6" />
              <p className="text-2xl text-white font-bold mb-2">No products found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Remove inline keyframes */
      `}</style>
    </>
  );
}
