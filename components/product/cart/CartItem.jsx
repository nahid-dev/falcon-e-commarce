"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const { product, quantity, color, size } = item;

  const price =
    product?.product_detail?.discount_price ??
    product?.product_detail?.regular_price;

  return (
    <div className="flex gap-5 mt-3" key={product.id}>
      <Checkbox id={`item_${product.id}`} />
      <div className="flex flex-col gap-3 md:flex-row w-full">
        <div className="flex gap-3 flex-grow">
          <Image
            src={product?.thumbnail ?? "/fallback.jpg"}
            alt={product?.name}
            width={420}
            height={420}
            className="rounded-md w-24 h-24 object-cover"
          />
          <div>
            <h2 className="font-medium text-neutral-800">{product?.name}</h2>
            <p>
              Color: {color}; Size: {size}
            </p>
            <div className="md:flex items-center gap-10 hidden">
              <div className="rounded-full border flex items-center gap-5 w-fit p-1">
                <Button
                  variant="icon"
                  onClick={onDecrease}
                  className="rounded-full bg-neutral-100 p-2.5"
                >
                  <Minus />
                </Button>
                <span className="text-neutral-800 font-bold">{quantity}</span>
                <Button
                  variant="icon"
                  onClick={onIncrease}
                  className="rounded-full bg-neutral-100 p-2.5"
                >
                  <Plus />
                </Button>
              </div>
              <Trash2
                onClick={onDelete}
                className="text-neutral-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-10">
          <div className="border rounded-full flex items-center gap-5 w-fit p-1">
            <Button
              variant="icon"
              onClick={onDecrease}
              className="rounded-full bg-neutral-100 p-2.5"
            >
              <Minus />
            </Button>
            <span className="text-neutral-800 font-bold">{quantity}</span>
            <Button
              variant="icon"
              onClick={onIncrease}
              className="rounded-full bg-neutral-100 p-2.5"
            >
              <Plus />
            </Button>
          </div>
          <Trash2
            onClick={onDelete}
            className="text-neutral-600 cursor-pointer"
          />
        </div>
        <div className="flex gap-3">
          <p className="text-lg font-bold text-black">৳{price}</p>
          {product?.product_detail?.discount_price && (
            <p className="text-[#475569] line-through">
              ৳{product?.product_detail?.regular_price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
