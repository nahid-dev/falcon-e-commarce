import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, Minus, Plus, Store, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const MyCart = () => {
  const breadcrumbItems = [
    { title: "Home", url: "/" },
    { title: "My Cart", url: "/my-cart" },
  ];
  return (
    <div className="custom-container py-2 sm:py-3 text-neutral-600">
      <Breadcrumb content={breadcrumbItems} />
      <div className="grid grid-cols-3 gap-10">
        {/* RIGHT SIDE */}
        <div className="border col-span-3 md:col-span-2 p-5 rounded-lg bg-white shadow">
          {/* CARD HEADER */}
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-lg md:text-[32px]">
              My Cart (3)
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <Checkbox id="select_all" />
                <label
                  htmlFor="select_all"
                  className="cursor-pointer hover:text-neutral-800"
                >
                  Select all
                </label>
              </div>
              <p className="cursor-pointer hover:text-neutral-800">Clear all</p>
            </div>
          </div>
          <div className="w-full h-[1px]"></div>
          {/* CART ITEMS - show items by map throw the categories */}
          <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center gap-4 bg-[#f1f5f9] px-3 py-2 -mr-5">
              <p className="mt-1">
                <Checkbox id="item1" />
              </p>
              <p className="flex items-center gap-3">
                <Store strokeWidth={1.5} className="size-5" />
                <span className="mt-1">BD FASHION HOUSE</span>
                <ChevronRight strokeWidth={1.5} className="size-5" />
              </p>
            </div>
            {/* Cart Item */}
            <div className="flex gap-5">
              {/* Checkbox */}
              <div>
                <Checkbox id="item2" />
              </div>
              {/* Product Details */}
              <div className="flex flex-col gap-3 md:flex-row w-full">
                <div className="flex gap-3 flex-grow">
                  <Image
                    src="/sample.jpg"
                    alt="Product Image"
                    width={420}
                    height={420}
                    className="rounded-md w-24 h-24 object-cover"
                  />
                  <div>
                    <h2 className="font-medium text-neutral-800">
                      Bestway Brand Air Inflatable 5 In 1 semi Double Sofa{" "}
                    </h2>
                    <p>Color: red; Size: M</p>
                    <div className="md:flex items-center gap-10 hidden ">
                      <div className="rounded-full border flex items-center gap-5 w-fit p-1">
                        <Button
                          variant="icon"
                          className="rounded-full bg-neutral-100 p-2.5"
                        >
                          <Minus />
                        </Button>
                        <span className="text-neutral-800 font-bold">1</span>
                        <Button
                          variant="icon"
                          className="rounded-full bg-neutral-100 p-2.5"
                        >
                          <Plus />
                        </Button>
                      </div>
                      <div>
                        <Trash2 className="text-neutral-600 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Only mobile view */}
                <div className="flex md:hidden items-center gap-10">
                  <div className="border rounded-full flex items-center gap-5 w-fit p-1">
                    <Button
                      variant="icon"
                      className="rounded-full bg-neutral-100 p-2.5"
                    >
                      <Minus />
                    </Button>
                    <span className="text-neutral-800 font-bold">1</span>
                    <Button
                      variant="icon"
                      className="rounded-full bg-neutral-100 p-2.5"
                    >
                      <Plus />
                    </Button>
                  </div>
                  <div>
                    <Trash2 className="text-neutral-600 cursor-pointer" />
                  </div>
                </div>
                {/* Price */}
                <div className="flex gap-3">
                  <p className="text-lg font-bold text-black">৳1139</p>
                  <p className="text-[#475569] line-through">৳1139</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT SIDE */}
        <div className="border col-span-3 md:col-span-1">SIDE BAR</div>
      </div>
    </div>
  );
};

export default MyCart;
