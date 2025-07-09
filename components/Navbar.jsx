"use client";
import { useContext } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import TextInputField from "./input/TextInputField";
import SubNavbar from "./SubNavbar";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ProductsContext } from "@/context";
const UserAndCartSection = dynamic(() => import("./UserAndCartSection"), {
  ssr: false,
});

const Navbar = () => {
  const { cartItems } = useContext(ProductsContext);
  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-[#0F172A] text-white py-4 px-2 md:px-4">
        <div className="custom-container flex items-center justify-between gap-1 md:gap-0 w-full">
          {/* Logo Section */}
          <Link
            href="/"
            className="text-lg sm:text-2xl font-bold leading-normal"
          >
            <span>
              <Image
                src="/logo/logo.png"
                width={360}
                height={360}
                alt="FALCON Logo"
                className="size-6 inline-block -mt-1"
              />
            </span>{" "}
            <span className="hidden md:inline-block">FALCON</span>
          </Link>
          {/* Search Bar */}
          <div className="w-full md:w-1/2 flex items-center">
            <TextInputField
              className="rounded-r-none p-1.5 md:p-2 lg:p-3 border-none"
              placeholder="Search for anything..."
            />
            <div className="bg-emerald-500 p-1.5 md:p-2 lg:p-3 text-white rounded-sm w-fit rounded-l-none cursor-pointer hover:bg-emerald-600 ">
              <Search className="size-5" />
            </div>
          </div>
          {/* User & Carts */}
          <UserAndCartSection cartItems={cartItems} />
        </div>
      </nav>
      {/* Sub-Navbar */}
      <SubNavbar />
    </div>
  );
};

export default Navbar;
