"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Store, ChevronRight } from "lucide-react";
import CartItem from "./CartItem";

const CartCategoryGroup = ({ category, items, onQuantityChange, onDelete }) => {
  return (
    <div className="mt-5">
      {/* Category Header */}
      <div className="flex items-center gap-4 bg-[#f1f5f9] px-3 py-2 -mr-5">
        <Checkbox id={`category_${category?.id}`} />
        <p className="flex items-center gap-3">
          <Store strokeWidth={1.5} className="size-5" />
          <span className="mt-1">{category?.name ?? "Unknown Category"}</span>
          <ChevronRight strokeWidth={1.5} className="size-5" />
        </p>
      </div>

      {/* Cart Items under this category */}
      {items.map((item) => (
        <CartItem
          key={item.product.id}
          item={item}
          onIncrease={() => onQuantityChange(item.product.id, "inc")}
          onDecrease={() => onQuantityChange(item.product.id, "dec")}
          onDelete={() => onDelete(item.product.id)}
        />
      ))}
    </div>
  );
};

export default CartCategoryGroup;
