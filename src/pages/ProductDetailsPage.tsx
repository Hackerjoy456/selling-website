import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { products } from "@/data/products";
import { Product } from "@/types";

export function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("ProductDetailsPage - productId:", productId);
    if (productId) {
      const foundProduct = products.find((p) => p.id === productId);
      console.log("ProductDetailsPage - foundProduct:", foundProduct);
      if (foundProduct) {
        setProduct(foundProduct);
        setIsLoading(false);
        // Small delay to ensure modal renders properly
        setTimeout(() => {
          console.log("ProductDetailsPage - Opening modal");
          setIsModalOpen(true);
        }, 100);
      } else {
        // Product not found, redirect to products page
        console.log("ProductDetailsPage - Product not found, redirecting");
        setIsLoading(false);
        navigate("/products", { replace: true });
      }
    } else {
      console.log("ProductDetailsPage - No productId, redirecting");
      setIsLoading(false);
      navigate("/products", { replace: true });
    }
  }, [productId, navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Navigate back to products page when modal is closed
    setTimeout(() => {
      navigate("/products");
    }, 300); // Wait for modal close animation
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0d1020]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00eaff] mb-4"></div>
          <p className="text-white text-lg">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0d1020]">
        <div className="text-center">
          <p className="text-white text-lg mb-4">Product not found</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00eaff] to-[#8a3dff] text-white font-black hover:shadow-[0_0_25px_rgba(138,61,255,0.6)] transition-all duration-300"
          >
            Go to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1020]">
      <ProductDetailsModal
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

