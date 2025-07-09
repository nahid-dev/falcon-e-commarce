"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { ProductsContext } from "@/context";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";
import CartCategoryGroup from "@/components/product/cart/CartCategoryGroup";
import CartSummary from "@/components/product/cart/CartSummary";
import AgreementCheckbox from "@/components/product/cart/AgreementCheckbox";

const breadcrumbItems = [
  { title: "Home", url: "/" },
  { title: "My Cart", url: "/my-cart" },
];

const MyCart = () => {
  const { cartItems, setCartItems, categories } = useContext(ProductsContext);
  const [agreed, setAgreed] = useState(false);

  const handleQuantityChange = (productId, type) => {
    const updatedItems = cartItems.map((item) => {
      if (item.product.id === productId) {
        const newQty =
          type === "inc"
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : 1;
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleDelete = (productId) => {
    const updatedItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const groupCartByCategory = () => {
    const grouped = {};
    cartItems?.forEach((item) => {
      const categoryId = item?.product?.category_id;
      if (!grouped[categoryId]) {
        grouped[categoryId] = {
          category: categories.find((cat) => cat.id === categoryId),
          items: [],
        };
      }
      grouped[categoryId].items.push(item);
    });
    return Object.values(grouped);
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(
      item?.product?.product_detail?.discount_price ??
        item?.product?.product_detail?.regular_price ??
        0
    );
    return acc + price * (item?.quantity ?? 1);
  }, 0);

  const handleCheckout = () => {
    if (!agreed) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    localStorage.setItem("checkout_items", JSON.stringify(cartItems));
    toast.success("Checkout successful! Items stored in local storage.");
  };

  return (
    <div className="custom-container py-2 sm:py-3 text-neutral-600">
      <Breadcrumb content={breadcrumbItems} />
      <div className="grid grid-cols-3 gap-10">
        {/* RIGHT SIDE */}
        <div className="border col-span-3 md:col-span-2 p-5 rounded-lg bg-white shadow">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-[32px]">
              My Cart ({cartItems.length})
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="select_all" />
                <label
                  htmlFor="select_all"
                  className="cursor-pointer hover:text-neutral-800"
                >
                  Select all
                </label>
              </div>
              <p
                className="cursor-pointer hover:text-neutral-800"
                onClick={() => {
                  setCartItems([]);
                  localStorage.removeItem("cartItems");
                }}
              >
                Clear all
              </p>
            </div>
          </div>
          <div className="w-full h-[1px]"></div>

          <div className="mt-5 flex flex-col gap-5">
            {groupCartByCategory().map(({ category, items }) => (
              <CartCategoryGroup
                key={category?.id}
                category={category}
                items={items}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>

        {/* LEFT SIDE */}
        <div className="col-span-3 md:col-span-1">
          <CartSummary
            subtotal={subtotal}
            agreed={agreed}
            onCheckout={handleCheckout}
          />
          <AgreementCheckbox agreed={agreed} setAgreed={setAgreed} />
        </div>
      </div>
    </div>
  );
};

export default MyCart;
