import React, { useContext, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();
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
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`/product/${product?.slug}`);
                }}
                className="w-full bg-teal-600 hover:bg-teal-700"
              >
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
