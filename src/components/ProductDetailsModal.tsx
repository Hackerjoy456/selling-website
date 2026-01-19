import { useState, useEffect } from "react";
import { Product, PriceOption } from "@/types";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Phone, Sparkles, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { products } from "@/data/products";

interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "8801629933030";

function formatWhatsAppMessage(product: Product, price: PriceOption): string {
  const priceText = price.usdt 
    ? `${price.bdt} BDT | ₹${price.inr} | ${price.usdt} USDT`
    : `${price.bdt} BDT | ₹${price.inr}`;
  const noteText = price.note ? ` ${price.note}` : "";
  return `${product.name} ${price.duration} ${priceText}${noteText}`;
}

export function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const { t } = useLanguage();

  useEffect(() => {
    if (product?.prices[0]) {
      setSelectedDuration(product.prices[0].duration);
    }
  }, [product]);

  if (!product) return null;

  const selectedPrice = product.prices.find(p => p.duration === selectedDuration) || product.prices[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="p-8 md:p-10 space-y-10">
        {/* Product Header Section - Enhanced */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image with Premium Effects */}
          <div className="flex-shrink-0 lg:w-[420px]">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[rgba(255,255,255,0.2)] shadow-2xl group/image">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(138,61,255,0.1)] z-10" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover relative z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              
              {/* Premium Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[rgba(0,234,255,0.25)] to-[rgba(138,61,255,0.25)] backdrop-blur-xl border-2 border-[rgba(255,255,255,0.3)] shadow-2xl">
                  <div className="relative">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,1)]"></span>
                    <span className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></span>
                  </div>
                  <span className="text-sm font-black text-white">{t("common.inStock")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info - Enhanced */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-base md:text-lg text-[#a9b0ff] mb-3 font-semibold">{product.subtitle}</p>
              {product.description && (
                <p className="text-sm md:text-base text-[#cfd6ff] leading-relaxed">{product.description}</p>
              )}
            </div>
            
            {/* Premium Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[rgba(0,234,255,0.1)] to-[rgba(0,234,255,0.05)] border-2 border-[rgba(0,234,255,0.3)] backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#00eaff]" />
                  <div className="text-xs text-[#a9b0ff] font-semibold uppercase tracking-wider">Price Range</div>
                </div>
                <div className="text-lg md:text-xl font-black text-white">₹{product.prices[0]?.inr} - ₹{product.prices[product.prices.length - 1]?.inr}</div>
              </div>
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[rgba(138,61,255,0.1)] to-[rgba(138,61,255,0.05)] border-2 border-[rgba(138,61,255,0.3)] backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#8a3dff]" />
                  <div className="text-xs text-[#a9b0ff] font-semibold uppercase tracking-wider">Plans</div>
                </div>
                <div className="text-lg md:text-xl font-black text-white">{product.prices.length} Options</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video/Demo Section - Optional */}
        {product.videoUrl && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,79,216,0.5)] to-transparent"></div>
              <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#ff4fd8]" />
                {t("productDetails.videoDemo")}
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(255,79,216,0.5)] to-transparent"></div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-[rgba(255,255,255,0.2)] bg-black">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={product.videoUrl.includes('youtube.com') || product.videoUrl.includes('youtu.be') 
                    ? product.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')
                    : product.videoUrl}
                  title={`${product.name} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Features Section - Premium Design */}
        {product.features && product.features.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(0,234,255,0.5)] to-transparent"></div>
              <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#00eaff]" />
                Key Features
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(0,234,255,0.5)] to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-2 border-[rgba(255,255,255,0.1)] hover:border-[#00eaff] hover:bg-gradient-to-br hover:from-[rgba(0,234,255,0.1)] hover:to-[rgba(0,234,255,0.05)] hover:shadow-[0_0_30px_rgba(0,234,255,0.3)] transition-all duration-300 hover:scale-[1.02]"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(0,234,255,0.2)] to-[rgba(138,61,255,0.2)] border-2 border-[rgba(0,234,255,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-[#00eaff]" />
                  </div>
                  <span className="text-base text-[#cfd6ff] font-semibold group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Section - World Class */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(138,61,255,0.5)] to-transparent"></div>
            <h3 className="text-3xl font-black text-white flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#8a3dff]" />
              {t("common.selectDuration")}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(138,61,255,0.5)] to-transparent"></div>
          </div>
          
          {/* Premium Price Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {product.prices.map((price, index) => (
              <button
                key={index}
                onClick={() => setSelectedDuration(price.duration)}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 text-left group overflow-hidden ${
                  selectedDuration === price.duration
                    ? "bg-gradient-to-br from-[rgba(0,234,255,0.3)] via-[rgba(138,61,255,0.3)] to-[rgba(255,79,216,0.2)] border-[#00eaff] shadow-[0_0_50px_rgba(0,234,255,0.6)] scale-105 ring-4 ring-[rgba(0,234,255,0.2)]"
                    : "bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.15)] hover:border-[#00eaff] hover:bg-gradient-to-br hover:from-[rgba(0,234,255,0.1)] hover:to-[rgba(138,61,255,0.1)] hover:scale-105 hover:shadow-[0_0_30px_rgba(0,234,255,0.4)]"
                }`}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                
                {selectedDuration === price.duration && (
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#00eaff] to-[#8a3dff] rounded-full flex items-center justify-center shadow-2xl animate-pulse ring-4 ring-[rgba(0,234,255,0.3)]">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="text-xs font-black text-[#a9b0ff] mb-3 uppercase tracking-widest">{price.duration}</div>
                  
                  {price.usdt ? (
                    <>
                      <div className="text-xl md:text-2xl font-black text-white mb-2 flex items-baseline gap-2">
                        {price.usdt}
                        <span className="text-lg text-[#00eaff]">USDT</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-[#00eaff]">₹{price.inr} INR</div>
                        <div className="text-sm font-semibold text-[#a9b0ff]">{price.bdt} BDT</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-xl md:text-2xl font-black text-white mb-2">₹{price.inr}</div>
                      <div className="text-sm font-semibold text-[#a9b0ff]">{price.bdt} BDT</div>
                    </>
                  )}
                  
                  {price.note && (
                    <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.15)]">
                      <div className="text-xs text-[#ff4fd8] font-black uppercase tracking-wide">{price.note}</div>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Premium Selected Price Display */}
          {selectedPrice && (
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[rgba(0,234,255,0.25)] via-[rgba(138,61,255,0.25)] to-[rgba(255,79,216,0.15)] border-2 border-[rgba(0,234,255,0.5)] shadow-[0_0_60px_rgba(0,234,255,0.4)] overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-[#00eaff] rounded-full animate-pulse shadow-[0_0_15px_rgba(0,234,255,0.8)]"></div>
                  <div className="text-sm font-black text-white uppercase tracking-widest">{t("common.selectedPlan")}: {selectedPrice.duration}</div>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center p-5 rounded-2xl bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                    <div className="text-xs text-[#a9b0ff] mb-3 font-bold uppercase tracking-wider">BDT</div>
                    <div className="text-2xl md:text-3xl font-black text-white">{selectedPrice.bdt}</div>
                  </div>
                  <div className="text-center p-5 rounded-2xl bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border-x-2 border-[rgba(255,255,255,0.2)]">
                    <div className="text-xs text-[#a9b0ff] mb-3 font-bold uppercase tracking-wider">INR</div>
                    <div className="text-2xl md:text-3xl font-black text-white">₹{selectedPrice.inr}</div>
                  </div>
                  {selectedPrice.usdt && (
                    <div className="text-center p-5 rounded-2xl bg-[rgba(0,0,0,0.3)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)]">
                      <div className="text-xs text-[#a9b0ff] mb-3 font-bold uppercase tracking-wider">USDT</div>
                      <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#00eaff] to-[#ff4fd8] bg-clip-text text-transparent">
                        {selectedPrice.usdt}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Button */}
        <div className="pt-8 border-t-2 border-[rgba(255,255,255,0.15)]">
          <Button
            asChild
            className="w-full rounded-2xl py-6 sm:py-7 font-black text-lg sm:text-xl bg-gradient-to-r from-[#25D366] via-[#00eaff] to-[#8a3dff] hover:from-[#8a3dff] hover:via-[#ff4fd8] hover:to-[#25D366] shadow-[0_0_50px_rgba(37,211,102,0.5)] hover:shadow-[0_0_70px_rgba(37,211,102,0.7)] transition-all duration-700 relative overflow-hidden group/btn"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formatWhatsAppMessage(product, selectedPrice))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 sm:gap-4 relative z-10"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-all duration-300" />
              <span>{t("common.contactToBuy")}</span>
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 opacity-80 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all duration-300" />
            </a>
          </Button>
          <p className="text-center text-sm sm:text-base text-[#a9b0ff] mt-4 font-medium">
            {t("productDetails.contactSupport")}
          </p>
        </div>

        {/* Product Recommendations */}
        <ProductRecommendations
          currentProduct={product}
          allProducts={products}
          onProductClick={(newProduct) => {
            onClose();
            setTimeout(() => {
              window.location.href = `/products#${newProduct.id}`;
            }, 300);
          }}
        />
      </div>
    </Modal>
  );
}
