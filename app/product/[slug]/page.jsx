"use client";
import APIKit from "@/common/helpers/APIKit";
import Breadcrumb from "@/components/Breadcrumb";
import DeliveryOptions from "@/components/product/DeliveryOptions";
import ProductDescription from "@/components/product/ProductDescription";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductOptions from "@/components/product/ProductOptions";
import { Button } from "@/components/ui/button";
import { ProductsContext } from "@/context";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = ({ params }) => {
  const { slug } = params;
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("Navy Blue");
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(ProductsContext)
  // GET PRODUCT DETAILS
  const { data: productDetails, isLoading } = useQuery({
    queryKey: ["/products/:slug"],
    queryFn: () =>
      APIKit.public.getProductDetails(slug).then(({ data }) => data?.data),
  });
  // console.log(productDetails);

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
      title: "Fashion",
      url: `/`,
    },
    {
      title: `T-Shirts`,
      url: `/`,
    },
  ];

  const handleAddToCart = (productId) => {
  if (typeof window === "undefined") return;

  const newCartItem = {
    id: productId,
    color: selectedColor,
    size: selectedSize,
    quantity,
  };
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItemIndex = items.findIndex(
    (item) =>
      item.id === productId &&
      item.color === selectedColor &&
      item.size === selectedSize
  );

  if (existingItemIndex !== -1) {
    items[existingItemIndex].quantity += quantity;
    toast.success("Product quantity updated in cart!");
  } else {
    items.push(newCartItem);
    toast.success("Product added to cart!");
  }
  setCartItems(items); // This updates context and localStorage
};
    

  if (isLoading) {
    return "Loading...";
  }
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
              <ProductImageGallery images={productDetails?.image} />
            </div>

            {/* Product Info & Options */}
            <div className="lg:col-span-1 order-2 lg:order-2">
              <ProductInfo
                name={productDetails?.name}
                price={productDetails?.product_detail?.discount_price}
                originalPrice={productDetails?.product_detail?.regular_price}
                rating={productDetails?.rating_avg}
                reviewCount={productDetails?.rating_count}
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

              <Button
                onClick={() => handleAddToCart(productDetails?.id)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 mt-4 sm:mt-6"
              >
                Add to Cart
              </Button>
            </div>

            {/* Delivery Options */}
            <div className="lg:col-span-1 order-3">
              <DeliveryOptions product={ productDetails} />
            </div>
          </div>

          {/* Product Description & Specifications */}
          <div className="mt-8 sm:mt-12">
            <ProductDescription
              description={productDetails.description}
              specifications={product.specifications}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
