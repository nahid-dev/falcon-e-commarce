"use client";
import { Button } from "@/components/ui/button";
import TextInputField from "@/components/input/TextInputField";

const CartSummary = ({ subtotal, agreed, onCheckout }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow flex flex-col gap-5">
      <h2 className="text-2xl font-medium">Order Summary</h2>
      <p className="flex items-center justify-between">
        <span className="font-medium">Subtotal</span>
        <span>৳{subtotal}</span>
      </p>
      <p className="flex items-center justify-between">
        <span className="font-medium">Shipping Fee</span>
        <span className="text-blue-600 text-sm">To be added</span>
      </p>
      <div className="flex">
        <TextInputField
          placeholder="Store/Falcon capone"
          className="rounded-r-none"
        />
        <Button className="rounded-l-none bg-emerald-500 hover:bg-emerald-600 block h-full py-[11px] text-base">
          Apply
        </Button>
      </div>
      <p className="flex items-center justify-between">
        <span className="text-lg font-medium">Total</span>
        <span className="text-xl text-black">৳{subtotal}</span>
      </p>
      <div>
        <Button
          onClick={onCheckout}
          className="bg-emerald-500 text-white hover:bg-emerald-600 w-full text-base"
          disabled={!agreed}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
