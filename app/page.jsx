"use client";
import ProductCard from "@/components/product/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "@/context";

export default function Home() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="min-h-screen flex items-center justify-center custom-container py-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No products found</div>
          <div className="text-gray-500">
            Try adjusting your search or filters
          </div>
        </div>
      )}
    </div>
  );
}
