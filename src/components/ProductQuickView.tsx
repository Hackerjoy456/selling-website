import { useState } from "react";
import { Product } from "@/types";
import { X, CheckCircle2, ShoppingBasket, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductQuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDetails: () => void;
}

export function ProductQuickView({ product, isOpen, onClose, onViewDetails }: ProductQuickViewProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'details'>('overview');

  if (!isOpen || !product) return null;

  const lowestPrice = product.prices[0];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <Card
        className="max-w-2xl w-full max-h-[90vh] overflow-hidden bg-[#0d1020] border border-[rgba(255,255,255,0.1)] relative flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">{product.name}</h3>
            <p className="text-sm text-[#a9b0ff]">{product.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 px-4 sm:px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'overview'
              ? 'border-[#00eaff] text-[#00eaff]'
              : 'border-transparent text-[#a9b0ff] hover:text-white'
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'features'
              ? 'border-[#00eaff] text-[#00eaff]'
              : 'border-transparent text-[#a9b0ff] hover:text-white'
              }`}
          >
            Features
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'details'
              ? 'border-[#00eaff] text-[#00eaff]'
              : 'border-transparent text-[#a9b0ff] hover:text-white'
              }`}
          >
            Details
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 custom-scrollbar">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1020] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-col items-start shadow-lg">
                    <span className="text-2xl font-black text-white drop-shadow-md">₹{lowestPrice?.inr || 0}</span>
                    {lowestPrice?.bdt && (
                      <span className="text-lg font-bold text-[#00eaff] drop-shadow-md">{lowestPrice.bdt} BDT</span>
                    )}
                    {lowestPrice?.usdt && (
                      <span className="mt-1 text-sm text-[#00eaff] font-bold px-2 py-0.5 rounded bg-[#00eaff]/10 border border-[#00eaff]/20 backdrop-blur-md">
                        {lowestPrice.usdt} USDT
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Shield className="w-6 h-6 text-[#00eaff] mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Secure</h4>
                  <p className="text-xs text-[#a9b0ff]">100% Safe & Verified</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Zap className="w-6 h-6 text-[#8a3dff] mb-2" />
                  <h4 className="text-sm font-bold text-white mb-1">Instant</h4>
                  <p className="text-xs text-[#a9b0ff]">Immediate Delivery</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              {product.features && product.features.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#00eaff] flex-shrink-0" />
                      <span className="text-sm text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#a9b0ff] text-center py-8">No specific features listed.</p>
              )}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-4">
              {product.description ? (
                <div className="prose prose-invert max-w-none">
                  <p className="text-[#cfd6ff] leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                </div>
              ) : (
                <p className="text-[#a9b0ff] text-center py-8">No detailed description available.</p>
              )}

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-4">Pricing Options</h4>
                <div className="space-y-3">
                  {product.prices.map((price, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-sm font-medium text-white">{price.duration}</span>
                      <div className="text-right flex flex-col items-end">
                        <div className="text-sm font-bold text-[#00eaff]">₹{price.inr}</div>
                        <div className="text-xs text-gray-400">{price.bdt} BDT</div>
                        {price.usdt && <div className="text-xs text-[#a9b0ff]">{price.usdt} USDT</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0d1020]">
          <button
            onClick={() => {
              onViewDetails();
              onClose();
            }}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00eaff] via-[#8a3dff] to-[#ff4fd8] text-white font-black hover:shadow-[0_0_25px_rgba(138,61,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBasket className="w-5 h-5" />
            {t("products.viewDetails")}
          </button>
        </div>
      </Card>
    </div>
  );
}

