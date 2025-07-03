"use client";
import { Headset, Menu, Package, Store, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const contactsInfo = [
  {
    name: "Track Order",
    href: "/track-order",
    icon: Package,
  },
  {
    name: "Help Center",
    href: "/help-center",
    icon: Headset,
  },
  {
    name: "Sell with Us",
    href: "/sell-with-us",
    icon: Store,
  },
];

const categories = [
  {
    name: "Fashion",
    href: "/category/fashion",
    icon: "👗",
  },
  {
    name: "Electronics",
    href: "/category/electronics",
    icon: "📱",
  },
  {
    name: "Home & Kitchen",
    href: "/category/home-kitchen",
    icon: "🏠",
  },
  {
    name: "Sports & Outdoors",
    href: "/category/sports-outdoors",
    icon: "⚽",
  },
];

const SubNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg w-full px-2 md:px-4">
      {/* Main bar */}
      <div className="custom-container py-2 flex items-center justify-between">
        {/* Left: Menu and Categories */}
        <div className="flex items-center gap-x-3 md:gap-x-5">
          {/* Menu icon on mobile */}
          <button
            className="md:hidden text-emerald-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>

          {/* Desktop categories */}
          <div className="hidden md:flex items-center gap-2">
            <Menu className="text-emerald-500 size-6" />
            <p className="font-medium text-neutral-600">Categories</p>
            <div className="flex items-center gap-4 pl-5">
              {categories.map((category, index) => (
                <Link href={category.href} key={index}>
                  <span className="text-sm text-neutral-600 hover:text-neutral-800">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact info */}
        <div className="hidden md:flex items-center gap-4 text-neutral-600">
          {contactsInfo.map((contact, index) => (
            <Link
              className="flex items-center gap-2 text-sm group"
              href={contact.href}
              key={index}
            >
              <contact.icon className="size-4 group-hover:text-emerald-600" />
              <span className="text-gray-600 uppercase">{contact.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white rounded-md animate-slide-down z-20 relative">
          <div className="px-4 py-3 flex flex-col gap-4">
            {/* Categories */}
            <div>
              <p className="font-semibold text-gray-700 mb-2">Categories</p>
              <div className="flex flex-col gap-2">
                {categories.map((category, index) => (
                  <Link href={category.href} key={index}>
                    <span className="text-sm text-neutral-600 hover:text-neutral-800">
                      {category.icon} {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div>
              <p className="font-semibold text-gray-700 mt-4 mb-2">
                Quick Links
              </p>
              <div className="flex flex-col gap-2">
                {contactsInfo.map((contact, index) => (
                  <Link
                    className="flex items-center gap-2 text-sm text-neutral-700"
                    href={contact.href}
                    key={index}
                  >
                    <contact.icon className="size-4 text-emerald-500" />
                    {contact.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;
