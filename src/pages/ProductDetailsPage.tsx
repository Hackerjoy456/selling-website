import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Product, PriceOption } from "@/types";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Sparkles, TrendingUp, ArrowLeft, ShoppingBasket, Play, MonitorPlay, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductRecommendations } from "@/components/ProductRecommendations";

const WHATSAPP_NUMBER = "8801629933030";

function formatWhatsAppMessage(product: Product, price: PriceOption): string {
  const priceText = price.usdt
    ? `${price.bdt} BDT | ₹${price.inr} | ${price.usdt} USDT`
    : `${price.bdt} BDT | ₹${price.inr}`;
  const noteText = price.note ? ` ${price.note}` : "";
  return `${product.name} ${price.duration} ${priceText}${noteText}`;
}

export function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(() => {
    const saved = localStorage.getItem("videoPlaylistOpen");
    return saved === null ? true : saved === "true";
  });

  const togglePlaylist = () => {
    const newState = !isPlaylistOpen;
    setIsPlaylistOpen(newState);
    localStorage.setItem("videoPlaylistOpen", String(newState));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      const foundProduct = products.find((p) => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        if (foundProduct.prices[0]) {
          setSelectedDuration(foundProduct.prices[0].duration);
        }
      } else {
        navigate("/products", { replace: true });
      }
    }
    setIsLoading(false);
  }, [productId, navigate]);

  if (isLoading || !product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
          <p className="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  const selectedPrice = product.prices.find(p => p.duration === selectedDuration) || product.prices[0];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container px-4 lg:px-8 max-w-7xl mx-auto">
        {/* Compact Header with Back Button */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/products")}
            className="p-2 rounded-full glass-card hover:bg-primary/20 text-gray-400 hover:text-primary transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl md:text-3xl font-heading font-black text-white tracking-tight text-shadow-glow truncate">
            {product.name}
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Image & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden glass-card group/image shadow-2xl border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-10" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-video object-cover relative z-0 transition-transform duration-700 group-hover/image:scale-105"
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase">{t("common.inStock")}</span>
                </div>
              </div>
            </div>

            {/* Video Demo - Embedded */}
            {/* Video Gallery */}
            {((product.videos && product.videos.length > 0) || product.videoUrl) && (
              (() => {
                const legacyVideo = product.videoUrl ? [{ title: "Product Showcase", url: product.videoUrl }] : [];
                const allVideos = product.videos && product.videos.length > 0 ? product.videos : legacyVideo;
                const currentVideo = allVideos[currentVideoIndex];

                const getYouTubeId = (url: string) => {
                  if (!url) return null;
                  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                  const match = url.match(regExp);
                  return (match && match[2].length === 11) ? match[2] : null;
                };

                const currentVideoId = getYouTubeId(currentVideo.url);

                if (!currentVideoId) return null;

                return (
                  <div className="space-y-3">
                    <div className="rounded-2xl overflow-hidden glass-card shadow-lg border border-white/5 relative group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors pointer-events-none z-0" />
                      <div className="relative pt-[56.25%] bg-black z-10">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${currentVideoId}?rel=0`}
                          title={currentVideo.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-3 border-t border-white/10 bg-[#0c1025]/50 backdrop-blur-sm flex items-center justify-between">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <MonitorPlay className="w-4 h-4 text-primary" />
                          {currentVideo.title}
                        </h4>
                        {allVideos.length > 1 && (
                          <button
                            onClick={togglePlaylist}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                            title={isPlaylistOpen ? "Collapse Playlist" : "Expand Playlist"}
                          >
                            {isPlaylistOpen ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronUp className="w-4 h-4 text-gray-400" />}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Playlist / Thumbnails */}
                    {allVideos.length > 1 && isPlaylistOpen && (
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide animate-fadeIn">
                        {allVideos.map((vid, idx) => {
                          const vidId = getYouTubeId(vid.url);
                          const isActive = idx === currentVideoIndex;
                          return (
                            <button
                              key={idx}
                              onClick={() => setCurrentVideoIndex(idx)}
                              className={`flex-shrink-0 w-32 group relative rounded-lg overflow-hidden border transition-all duration-300 ${isActive
                                ? "border-primary shadow-[0_0_10px_rgba(0,234,255,0.3)] opacity-100"
                                : "border-white/10 opacity-70 hover:opacity-100"
                                }`}
                            >
                              <div className="aspect-video bg-black relative">
                                <img
                                  src={`https://img.youtube.com/vi/${vidId}/mqdefault.jpg`}
                                  alt={vid.title}
                                  className="w-full h-full object-cover"
                                />
                                <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"}`}>
                                  <Play className="w-6 h-6 text-white opacity-80" />
                                </div>
                              </div>
                              <div className={`p-1.5 text-[10px] font-bold truncate transition-colors ${isActive ? "bg-primary text-black" : "bg-[#0c1025] text-gray-400"}`}>
                                {vid.title}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })()
            )}

            {/* Quick Stats Grid - Compact */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-4 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="p-1.5 rounded-lg bg-primary/10 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Starting At</div>
                <div className="text-lg font-black text-white">₹{product.prices[0]?.inr}</div>
              </div>
              <div className="glass-card p-4 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="p-1.5 rounded-lg bg-secondary/10 mb-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Options</div>
                <div className="text-lg font-black text-white">{product.prices.length} Plans</div>
              </div>
            </div>

            {/* Description - Compact */}
            {product.description && (
              <div className="glass-card p-5 rounded-xl text-sm text-gray-300 leading-relaxed border-l-2 border-primary">
                {product.description}
              </div>
            )}
          </div>

          {/* Right Column: Pricing & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Key Features - Compact Row */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {feature}
                  </span>
                ))}
              </div>
            )}

            <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <h3 className="text-lg font-heading font-black text-white mb-4 flex items-center gap-2">
                <ShoppingBasket className="w-5 h-5 text-primary" />
                Select Your Plan
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {product.prices.map((price, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDuration(price.duration)}
                    className={`relative p-4 rounded-xl transition-all duration-200 text-left group border ${selectedDuration === price.duration
                      ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(0,234,255,0.2)]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                      }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className={`text-xs font-bold uppercase tracking-wider ${selectedDuration === price.duration ? "text-primary" : "text-gray-400"}`}>
                        {price.duration}
                      </div>
                      {selectedDuration === price.duration && <CheckCircle2 className="w-4 h-4 text-primary" />}
                    </div>

                    <div className="space-y-1 mt-1">
                      {price.usdt ? (
                        <>
                          <div className="text-lg font-black text-white">{price.usdt} <span className="text-xs font-medium opacity-70">USDT</span></div>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs font-bold text-[#00eaff]">₹{price.inr} INR</span>
                            <span className="text-xs font-bold text-[#ff4fd8]">{price.bdt} BDT</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-lg font-black text-white">₹{price.inr}</div>
                          <div className="text-sm font-bold text-[#ff4fd8]">{price.bdt} BDT</div>
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Total & Action Bar */}
              {selectedPrice && (
                <div className="bg-[#0c1025]/80 rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="text-xs text-gray-400 mb-1">Total Amount</div>
                    <div className="text-2xl font-black text-white leading-none">
                      {selectedPrice.usdt ? `${selectedPrice.usdt} USDT` : `₹${selectedPrice.inr}`}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full sm:w-auto px-8 py-6 rounded-xl text-base font-bold bg-white text-black hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-primary/50"
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formatWhatsAppMessage(product, selectedPrice))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{t("common.buyNow")}</span>
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Video Demo Button Removed - Moved to Left Column Embed */}

          </div>
        </div>

        {/* Recommendations - Full Width */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <ProductRecommendations
            currentProduct={product}
            allProducts={products}
            onProductClick={(newProduct) => {
              navigate(`/products/${newProduct.id}`);
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
