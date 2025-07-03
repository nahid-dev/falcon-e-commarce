import { Headset, Menu, Package, Store } from "lucide-react";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="bg-white shadow-lg py-2 px-4 md:container flex items-center justify-between">
      <div className="flex items-center justify-start divide-x-2 gap-x-5">
        <div className="flex items-center gap-2">
          <Menu className="text-emerald-500 size-6" />
          <p className=" font-medium text-neutral-600">Categories</p>
        </div>
        <div className="flex items-center gap-4 pl-5">
          {categories.map((category, index) => (
            <Link href={category.href} key={index}>
              <span className="text-sm">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 text-neutral-600">
        {contactsInfo.map((contact, index) => (
          <Link
            className="flex items-center gap-2 text-sm group"
            href={contact.href}
            key={index}
          >
            <contact.icon className="text-gray-600 size-4 group-hover:text-emerald-600" />{" "}
            <span className="text-gray-600 uppercase">{contact.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubNavbar;
