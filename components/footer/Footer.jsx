import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { AppDownloadLinks } from "./AppDownloadLinks";
import { SocialLinks } from "./SocialLinks";
import { PaymentMethods } from "./PaymentMethods";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="custom-container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span>
                <Image
                  src="/logo/logo.png"
                  width={360}
                  height={360}
                  alt="FALCON Logo"
                  className="size-6 inline-block -mt-1"
                />
              </span>
              <h2 className="text-2xl md:text[48px] font-bold">FALCON</h2>
            </Link>

            <p className="text-white mb-6 text-sm leading-relaxed">
              Experience our new platform & Enjoy exciting deals and offers on
              your day to day
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white p-3 rounded-full">
                  <MapPin className="size-5 text-[#0F172A] flex-shrink-0" />
                </span>
                <span className="text-white">
                  House #64, Road 13, ASA Center, Uttara, Dhaka-1402
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white p-3 rounded-full">
                  <Phone className="size-5 text-[#0F172A] flex-shrink-0" />
                </span>
                <span className="text-white">01729-1497201</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <span className="bg-white p-3 rounded-full">
                  <Mail className="size-5 text-[#0F172A] flex-shrink-0" />
                </span>
                <span className="text-white">falcon@gmail.com</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-200">ABOUT</h3>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "About Us",
                "Careers",
                "Press",
                "Cancellation & Returns",
                "Terms of Use",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-slate-200">HELP</h3>
            <ul className="space-y-3">
              {[
                "Payments",
                "Shipping",
                "My Orders",
                "FAQs",
                "Terms of Use",
                "Security",
                "Privacy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-white text-sm transition-colors duration-200 px-2 md:px-0"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & App Download Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg mb-4 text-slate-400">Need Support?</h3>
              <div className="border border-white rounded-md px-4 py-3 flex items-center gap-3 w-fit">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium">10724-7814XX</span>
              </div>
            </div>

            <AppDownloadLinks />
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <SocialLinks />
            <PaymentMethods />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">Falcon ©2025. Design by xyz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
