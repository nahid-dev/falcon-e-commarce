"use client";
import React from "react";
import { useState } from "react";
import { Star, Heart, Share2, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import DeliveryOptions from "@/components/product/DeliveryOptions";
import ProductDescription from "@/components/product/ProductDescription";
import ProductOptions from "@/components/product/ProductOptions";
import Breadcrumb from "@/components/Breadcrumb";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("Navy Blue");
  const [quantity, setQuantity] = useState(2);

  const product = {
    id: 1,
    name: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt.",
    price: 1139.33,
    originalPrice: 1500,
    rating: 4.7,
    reviewCount: 2254,
    colors: ["Navy Blue", "Maroon", "Blue", "Black"],
    sizes: ["XL", "XS", "S", "M", "L"],
    images: ["/lovable-uploads/45612171-f29f-4124-a9ef-04c716806575.png"],
    description:
      "Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.",
    specifications: [
      "GMP Cosmetic Good Manufacturing Practice",
      "Cruelty Free",
      "No Animal Testing",
      "Zenpia Global Standard",
      "Comply with Global Standard",
    ],
  };

  const breadCrumbContent = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Tops",
      url: `/`,
    },
    {
      title: `T-Shirts`,
      url: `/`,
    },
  ];
  return (
    <div>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="custom-container py-2 sm:py-3 text-xs sm:text-sm text-gray-600">
          <Breadcrumb content={breadCrumbContent} />
        </div>

        {/* Main Product Section */}
        <div className="custom-container py-4 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Product Images */}
            <div className="lg:col-span-1 order-1">
              <ProductImageGallery images={product.images} />
            </div>

            {/* Product Info & Options */}
            <div className="lg:col-span-1 order-2 lg:order-2">
              <ProductInfo
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />

              <ProductOptions
                colors={product.colors}
                sizes={product.sizes}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                quantity={quantity}
                onColorChange={setSelectedColor}
                onSizeChange={setSelectedSize}
                onQuantityChange={setQuantity}
              />

              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 mt-4 sm:mt-6">
                Add to Cart
              </Button>
            </div>

            {/* Delivery Options */}
            <div className="lg:col-span-1 order-3">
              <DeliveryOptions />
            </div>
          </div>

          {/* Product Description & Specifications */}
          <div className="mt-8 sm:mt-12">
            <ProductDescription
              description={product.description}
              specifications={product.specifications}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
