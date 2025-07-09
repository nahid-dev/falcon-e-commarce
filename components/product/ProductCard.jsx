import React, { useContext, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import toast from "react-hot-toast";
import { ProductsContext } from "@/context";

const ProductCard = ({ product }) => {
   const [selectedSize, setSelectedSize] = useState("XS");
    const [selectedColor, setSelectedColor] = useState("Navy Blue");
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(ProductsContext)

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    e.preventDefault();
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
  setCartItems(items); 
};
  return (
    <Link href={`/product/${product?.slug}`} className="block">
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
        <CardContent className="p-0 flex flex-col justify-between h-full">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <Image
                src={product?.thumbnail}
                alt={product?.name}
                width={1080}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
              {product?.name || "Product Name"}
            </h3>

            <div className="flex items-center gap-1 mb-3">
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-600">
                {product?.rating_avg} ({product?.rating_count})
              </span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">
                  ৳{product?.discount_price}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ৳{product?.regular_price}
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <Button
                type="button"
                onClick={(e) => handleAddToCart(e, product?.id)}
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={!product.available_stock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product?.available_stock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
